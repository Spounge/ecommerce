import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import CategoryList from './categories/categoryList';
import { NavBar } from '../shared';

const useStyles = makeStyles(theme => ({
  title: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(4),
  },
}));

export default function Categories() {
  const classes = useStyles();

  return (
    <>
      <NavBar title="Categories" />
      <main>
        <Typography className={classes.title} variant="h3">
          Categories
        </Typography>
        <CategoryList />
      </main>
    </>
  );
}