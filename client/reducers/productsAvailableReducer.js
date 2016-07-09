import { SHOW_NO_PRODUCT_MESSAGE, CHANGE_NO_PRODUCT_MESSAGE } from '../constants';

const productsAvailableReducer = (state={}, action) => {
  switch(action.type) {
  case SHOW_NO_PRODUCT_MESSAGE: {

    state = {...state, show: action.payload};
    break;
  }
  case CHANGE_NO_PRODUCT_MESSAGE: {

    state = {...state, message: action.payload};
    break;
  }
  }
  return state;
};

export default productsAvailableReducer;