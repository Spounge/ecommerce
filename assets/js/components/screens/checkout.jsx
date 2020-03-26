import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import CheckoutInformation from './checkout/checkoutForm';
import { NavBar } from '../shared';

const useStyles = makeStyles(theme => ({
  title: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(4),
  },
}));

export default function Checkout() {
  const classes = useStyles();

  return (
    <>
      <NavBar title="Checkout" />
      <main>
        <Typography className={classes.title} variant="h3">
          Checkout
          <CheckoutInformation />
        </Typography>
      </main>
    </>
  );
}