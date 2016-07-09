import { ADD_PRODUCTS, RESET_PRODUCT_LIST, FETCH_PRODUCTS } from '../constants';

const productsReducer = (state=[], action) => {

  switch(action.type) {

  case ADD_PRODUCTS: {

    state = state.concat(action.payload);
    break;
  }

  case RESET_PRODUCT_LIST: {
    state = [];
    break;
  }

  case FETCH_PRODUCTS: {

    state = action.payload;
    break;
  }
  }

  return state;
};

export default productsReducer;