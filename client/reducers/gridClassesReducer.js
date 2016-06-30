import { SWITCH_GRID } from '../constants';

const gridClasses = {
    grid: 'width100',
    gridImage: 'width100',
    tileWidth: 6
  };

const gridClassesReducer = (state=gridClasses, action) => {

  switch(action.type) {

    case SWITCH_GRID: {

      state = action.payload.newClasses;
      return state;
    }

    default:
    return state;
  }
};

export default gridClassesReducer;