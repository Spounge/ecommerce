import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'
import React from 'react';
import TruncateString from 'react-truncate-string';

import {getProduct} from '../../../common/networking/ecommerce-api';
import {addProductToCart} from '../../../redux/actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


const styles = theme => ({
  [theme.breakpoints.down('xl')]: {
    card: {
      width: '80%',
    },
  },
  [theme.breakpoints.up('xl')]: {
    card: {
      width: '50%',
    },
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(4),
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
  title: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(4),
  },
});



class ProductDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true, product: null };
  }

  componentDidMount() {
    const { id } = this.props;
    this.getProduct(id);
  }

  getProduct(id) {
    getProduct(id)
    .then(product => this.setState({ loading: false, product }));
  }

  render() {
    const { addProductToCart, classes } = this.props;
    const { loading, product } = this.state;

    return (
      <>
        {loading ? (
          <CircularProgress className={classes.circularProgress} size={70} />
        ) : (
          <>
            <Typography className={classes.title} component="h1" variant="h3">
              <TruncateString text={product.name} truncateAt={100} />
            </Typography>
            <Grid container justify="center">
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                />
                <CardActions>
                  <Button color="primary"  onClick={() => addProductToCart(product.id)} size="large">
                    Add to cart
                  </Button>
                  <Button color="primary" disabled size="large">
                    Buy it now
                  </Button>
                </CardActions>
                <CardContent className={classes.cardContent}>
                  <Typography component="h2" gutterBottom variant="h5">
                    {product.name}
                  </Typography>
                  <Typography component="p" variant="h6">
                    {product.price}$
                  </Typography>
                  <Typography>
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </>
        )}
      </>
    );
  }
}

ProductDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

const mapStateToProps = null;

const mapDispatchToProps = {
  addProductToCart: addProductToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ProductDetail));