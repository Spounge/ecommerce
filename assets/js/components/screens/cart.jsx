import React from 'react';

import ProductList from './cart/productList';
import { NavBar } from '../shared';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(4),
  },
}));

export default function Cart() {
  const classes = useStyles();

  return (
    <>
      <NavBar title="Cart" />
      <main>
        <Typography className={classes.title} variant="h3">
          Products in cart
        </Typography>
        <ProductList />
      </main>
    </>
  );
}