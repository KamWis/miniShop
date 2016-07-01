import { SHOW_NO_PRODUCT_MESSAGE } from '../constants';

const productsAvailableReducer = (state=true, action) => {
  switch(action.type) {
  case SHOW_NO_PRODUCT_MESSAGE: {
    state = action.payload;
    return state;
  }
  default:
    return state;
  }
};

export default productsAvailableReducer;