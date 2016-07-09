import { SORT_PRODUCTS } from '../constants';

const sortOrderReducer = (state='name', action) => {
  switch(action.type) {
  case SORT_PRODUCTS: {

    state = action.payload;
    break;
  }
  }

  return state;
};


export default sortOrderReducer;