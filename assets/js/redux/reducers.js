import {
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
} from './actions';


const initialState = {
  cart: []
};

export default function rootReducer(state = initialState, action) {
  let product = state.cart.find(product => product.id === action.id);
  switch (action.type) {
    case ADD_PRODUCT_CART:
      if (product) {
        state.cart = state.cart.filter(product => product.id !== action.id);
        product.quantity += 1;
      } else {
        product = {
          id: action.id,
          quantity: 1,
        };
      }
      return {
        ...state,
        cart: [
          ...state.cart,
          product,
        ]
      };

    case REMOVE_PRODUCT_CART:
      if (product) {
        state.cart = state.cart.filter(product => product.id !== action.id);
        if (product.quantity > 1) {
          product.quantity -= 1;
          state.cart.push(product);
        }
        return {
          ...state,
          cart: state.cart,
        };
      }

    default:
      return state
  }
  return state;
}