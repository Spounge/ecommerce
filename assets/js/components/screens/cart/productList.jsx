import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';;
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getProductArray } from '../../../common/networking/ecommerce-api';
import { removeProductFromCart } from '../../../redux/actions';


const styles = theme => ({
  [theme.breakpoints.down('xl')]: {
    checkout: {
      width: '90%',
    },
    list: {
      width: '90%',
    },
  },
  [theme.breakpoints.up('xl')]: {
    checkout: {
      width: '60%',
    },
    list: {
      width: '60%',
    },
  },
  checkout: {
    alignSelf: 'center',
    marginTop: theme.spacing(4),
  },
  circularProgress: {
    left: -35,
    marginLeft: '50vw',
    marginTop: '50vh',
    position: 'absolute',
    top: -35,
  },
  empty: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },
});

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, products: [] };
  }

  componentDidMount() {
    const { cart } = this.props;
    console.log(cart);
    const product_ids = cart.map(product => product.id);
    this.getProducts(product_ids);
  }

  computeTotal(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].price * this.getCartQuantity(products[i].id);
    }
    return total;
  }

  getProducts(ids) {
    if (ids.length > 0) {
      getProductArray(ids).then(products => this.setState({loading: false, products}));
    } else {
      this.setState({loading: false});
    }
  }

  getCartQuantity(id) {
    const { cart } = this.props;
    let product = cart.find(product => product.id === id);
    return product.quantity;
  }

  removeProduct(id) {
    const { removeProductFromCart } = this.props;
    if (this.getCartQuantity(id) == 1) {
      let products = this.state.products;
      products = products.filter(product => product.id !== id);
      this.setState({products: products});
    }
    removeProductFromCart(id);
  }

  renderSecondaryAction(product) {
    if (this.getCartQuantity(product.id) > 1) {
      return (
        <IconButton aria-label="quantity-down" edge="end" onClick={() => this.removeProduct(product.id)}>
          <RemoveIcon />
        </IconButton>
      );
    } else {
      return (
        <IconButton aria-label="delete" edge="end" onClick={() => this.removeProduct(product.id)}>
          <DeleteIcon />
        </IconButton>
      );
    }
  }

  render() {
    const { classes, history } = this.props;
    const { loading, products } = this.state;

    return (
      <>
        {loading ? (
          <CircularProgress className={classes.circularProgress} size={70} />
        ) : (
          products && products.length ? (
            <>
              <Grid container direction="column">
                <Grid container justify="center">
                  <List className={classes.list} style={{borderColor: 'black', borderWidth: '1px'}}>
                    {products.map(product => (
                      <React.Fragment key={product.id}>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar alt="product photo" src="https://source.unsplash.com/random" />
                          </ListItemAvatar>
                          <ListItemText
                            primary={product.name.length > 27 ? product.name.slice(0, 27).concat('...') : product.name}
                            secondary={`${product.price}$ x ${this.getCartQuantity(product.id)}`}
                          />
                          <ListItemSecondaryAction>
                            {this.renderSecondaryAction(product)}
                          </ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                      </React.Fragment>
                    ))}
                    <ListItem key='total'>
                      <ListItemText
                        primary={`Total: ${this.computeTotal(products)}$`}
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Button className={classes.checkout}
                        color="primary"
                        onClick={() => history.push('/checkout')}
                        variant="outlined" >
                  Checkout
                </Button>
              </Grid>
            </>
          ) : (
            <Typography className={classes.empty}>
              No products in your cart. <Link href="/">Add some.</Link>
            </Typography>
          )
        )}
      </>
    );
  }
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeProductFromCart: removeProductFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(ProductList)));