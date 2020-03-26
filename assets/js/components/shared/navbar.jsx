import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
}));

function cartCount(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].quantity;
  }
  return total;
}

function NavBar({ isLogged, cart, title }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton aria-label="menu"
                      color="inherit"
                      className={classes.menuButton}
                      edge="start"
                      onClick={() => history.push('/')}>
            <HomeIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6">
            {title}
          </Typography>
          <IconButton color="inherit" onClick={() => history.push('/category')}>
            <CategoryIcon />
          </IconButton>
          <IconButton color="inherit" onClick={() => history.push('/cart')}>
            <Badge badgeContent={cartCount(cart)} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <Button color="inherit" onClick={() => history.push('/login')}>Login</Button>
          <Typography variant="button">
            Or
          </Typography>
          <Button color="inherit" onClick={() => history.push('/signup')}>Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  isLogged: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);