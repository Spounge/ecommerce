import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import React from 'react';
import {getProductArray, placeOrder} from '../../../common/networking/ecommerce-api';
import {removeProductFromCart} from '../../../redux/actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


const styles = theme => ({
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(1),
  },
  circularProgress: {
    left: -35,
    marginLeft: '50vw',
    marginTop: '50vh',
    position: 'absolute',
    top: -35,
  },
  form: {
    marginTop: theme.spacing(3),
    width: '100%',
  },
  paper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(8),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      loading: true,
      products: [],
    };
  }

  componentDidMount() {
    const { cart } = this.props;
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

  getCartQuantity(id) {
    const { cart } = this.props;
    let product = cart.find(product => product.id === id);
    return product.quantity;
  }

  getProducts(ids) {
    if (ids.length > 0) {
      getProductArray(ids).then(products => this.setState({loading: false, products}));
    } else {
      this.setState({loading: false});
    }
  }

  handleChange(event) {
    let value;

    if (event.target.name === 'isAdmin') {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }
    this.setState({
      [event.target.name]: value,
    });
  }

  handleSubmit(event) {
    const { firstName, lastName, address, creditCardNb, creditCardPin } = this.state;
    const { cart, history } = this.props;
    const product_ids = [];
    for (let i = 0; i < cart.length; i++) {
      for (let j = 0; j < cart[i].quantity; j++) {
        product_ids.push(cart[i].id);
      }
    }
    placeOrder({firstName, lastName, address, creditCardNb, creditCardPin, product_ids})
      .then(id => {
        history.push(`/order/${id}`);
      });
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;
    const { products, loading } = this.state;

    return (
      <>
        {loading ? (
          <CircularProgress className={classes.circularProgress} size={70} />
        ) : (
          <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <ShoppingCartOutlined />
              </Avatar>
              <Typography component="h1" variant="h5">
                Checkout
              </Typography>
              <form className={classes.form} onSubmit={this.handleSubmit.bind(this)}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h5">
                      Total to pay:
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h5">
                      {this.computeTotal(products)} $
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      autoFocus
                      id="firstName"
                      fullWidth
                      label="First Name"
                      name="firstName"
                      onChange={this.handleChange.bind(this)}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="lname"
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      onChange={this.handleChange.bind(this)}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="street-address"
                      fullWidth
                      id="address"
                      label="Address"
                      multiline
                      name="address"
                      onChange={this.handleChange.bind(this)}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="creditCardNb"
                      label="Credit card N°"
                      name="creditCardNb"
                      onChange={this.handleChange.bind(this)}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="creditCardPin"
                      label="Credit card pin"
                      name="creditCardPin"
                      onChange={this.handleChange.bind(this)}
                      required
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Button
                  className={classes.submit}
                  color="primary"
                  fullWidth
                  type="submit"
                  variant="contained"
                >
                  Pay
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="/" variant="body2">
                      I want to buy more
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        )}
      </>
    );
  }
}

CheckoutForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeProductFromCart: removeProductFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(CheckoutForm)));