import { COUNT_PRODUCT_PAGES, ZERO_PRODUCT_PAGES_COUNT } from '../constants';

const pageCountReducer = (state=1, action) => {
  switch(action.type) {
  case COUNT_PRODUCT_PAGES: {
    state = state + action.payload;
    return state;
  }
  case ZERO_PRODUCT_PAGES_COUNT: {
    state = 1;
    return state;
  }
  default:
    return state;
  }
};

export default pageCountReducer;