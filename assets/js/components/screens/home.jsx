import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import ProductList from './home/productList';
import { NavBar } from '../shared';

const useStyles = makeStyles(theme => ({
  title: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(4),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <NavBar title="Home" />
      <main>
        <Typography className={classes.title} variant="h3">
          Latest Products
        </Typography>
        <ProductList />
      </main>
    </>
  );
}