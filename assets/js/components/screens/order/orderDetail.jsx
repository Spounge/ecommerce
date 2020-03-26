import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getOrder } from '../../../common/networking/ecommerce-api';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import TruncateString from 'react-truncate-string';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';


const styles = theme => ({
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
  text: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
});

class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, order: null };
  }

  componentDidMount() {
    const { id } = this.props;
    this.getOrder(id);
  }

  getOrder(id) {
    const { history } = this.props;
    getOrder(id)
      .then(order => this.setState({ loading: false, order }))
      .catch(error => {
        history.push('*');
      });
  }

  render() {
    const { classes } = this.props;
    const { loading, order } = this.state;

    return (
      <>
        {loading ? (
          <CircularProgress className={classes.circularProgress} size={70} />
        ) : (
          <>
            <Typography className={classes.title} component="h1" variant="h3">
              Order N°{order.id}
            </Typography>
            <Typography className={classes.title} variant="h4">
              Buyer
            </Typography>
            <Typography className={classes.text}>
              Name: {order.firstname} {order.lastname}
            </Typography>
            <Typography className={classes.text}>
              Address: {order.address}
            </Typography>
            <Typography className={classes.text}>
              Credit Card N°: {order.creditCardNb}
            </Typography>
            <Typography className={classes.text}>
              Credit Card pin: {order.creditCardPin}
            </Typography>
            <Typography className={classes.title} variant="h4">
              Products
            </Typography>
            {order.products.map(product => (
              <Typography className={classes.text} key={product.id}>
                {product.name.length > 27 ? product.name.slice(0, 27).concat('...') : product.name} | {product.price}$
              </Typography>
            ))}
            <Typography className={classes.text}>
              Total = {order.totalPrice}$
            </Typography>
          </>
        )}
      </>
    );
  }
}

OrderDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

export default withRouter(withStyles(styles)(OrderDetail));