export const ADD_PRODUCT_CART = 'ADD_PRODUCT_CART';
export const REMOVE_PRODUCT_CART = 'REMOVE_PRODUCT_CART';

export function addProductToCart(id) {
  return { type: ADD_PRODUCT_CART, id: id };
}

export function removeProductFromCart(id) {
  return { type: REMOVE_PRODUCT_CART, id: id };
}