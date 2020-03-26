import PropTypes from 'prop-types';
import React from 'react';

import OrderDetail from './order/orderDetail';
import { NavBar } from '../shared';
import Typography from '@material-ui/core/Typography';
import ProductList from './home/productList';

export default function Order(props) {
  const { match: { params: { id } } } = props;

  return (
    <>
      <NavBar title="Order" />
      <main>
        <OrderDetail id={id} />
      </main>
    </>
  );
}

Order.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  })
};