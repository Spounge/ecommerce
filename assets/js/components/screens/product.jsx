import PropTypes from 'prop-types';
import React from 'react';

import ProductDetail from './product/productDetail';
import { NavBar } from '../shared';

export default function Product(props) {
  const { match: { params: { id } } } = props;

  return (
    <>
      <NavBar title="Product" />
      <main>
        <ProductDetail id={id} />
      </main>
    </>
  );
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  })
};