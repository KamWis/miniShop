import { QUERY_STRING } from '../constants';

const queryStringReducer = (state='', action) => {
  switch(action.type) {
    case QUERY_STRING: {

      state = action.payload;
      return state;
    }
    default:
    return state;
  }
};

export default queryStringReducer;