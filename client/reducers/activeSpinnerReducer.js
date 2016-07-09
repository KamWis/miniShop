import { ACTIVE_SPINNER } from '../constants';

const activeSpinnerReducer = (state=false, action) => {

  switch(action.type) {

  case ACTIVE_SPINNER: {

    state = action.payload;
    break;
  }
  }

  return state;
};

export default activeSpinnerReducer;