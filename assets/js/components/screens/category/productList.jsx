import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TruncateString from 'react-truncate-string';

import { getProductCategory } from '../../../common/networking/ecommerce-api';
import { addProductToCart } from '../../../redux/actions';


const styles = theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    paddingBottom: theme.spacing(8),
    paddingTop: theme.spacing(4),
    minWidth: '100%',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
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
    this.getProducts();
  }

  getProducts() {
    const { categoryId } = this.props;
    getProductCategory(categoryId).then(products => this.setState({ loading: false, products }));
  }

  render() {
    const { addProductToCart, classes, history } = this.props;
    const { loading, products } = this.state;

    return (
      <>
        {loading ? (
          <CircularProgress className={classes.circularProgress} size={70} />
        ) : (
          products && products.length ? (
            <Container className={classes.cardGrid} maxWidth="md">
              <Grid container spacing={4}>
                {products.map(product => (
                  <Grid key={product.id} item lg={2} md={4} sm={6} xs={12}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title={product.name}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography component="h2" gutterBottom variant="h5">
                          <TruncateString text={product.name} truncateAt={100} />
                        </Typography>
                        <Typography>
                          {product.price}$
                        </Typography>art
                      </CardContent>
                      <CardActions>
                        <Button color="primary"  onClick={() => history.push(`/product/${product.id}`)} size="small">
                          View
                        </Button>
                        <Button color="primary"  onClick={() => addProductToCart(product.id)} size="small">
                          Add to cart
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          ) : (
            <Typography className={classes.empty}>
              No products yet T_T.
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
  categoryId: PropTypes.string.isRequired,
};

const mapStateToProps = null;

const mapDispatchToProps = {
  addProductToCart: addProductToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(ProductList)));