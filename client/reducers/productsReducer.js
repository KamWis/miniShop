import { ADD_PRODUCTS, RESET_PRODUCT_LIST, CREATE_PRODUCT, FETCH_PRODUCTS } from '../constants';

const productsReducer = (state=[], action) => {

  switch(action.type) {

  case ADD_PRODUCTS: {

    state = state.concat(action.payload);
    return state;
  }

  case RESET_PRODUCT_LIST: {
    state = [];
    return state;
  }

  case CREATE_PRODUCT: {

    state = state.concat(action.payload);
    return state;
  }

  case FETCH_PRODUCTS: {

    state = action.payload;
    return state;
  }

  default:
    return state;
  }
};

export default productsReducer;