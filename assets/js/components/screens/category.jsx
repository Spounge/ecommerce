import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import ProductList from './category/productList';
import { NavBar } from '../shared';
import PropTypes from 'prop-types';


export default function Category({ match: { params: { id } } }) {
  return (
    <>
      <NavBar title="Category" />
      <main>
        <ProductList categoryId={id} />
      </main>
    </>
  );
}

Category.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  })
};