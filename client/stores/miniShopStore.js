import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import throttleActions from "redux-throttle-actions";
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import {browserHistory} from 'react-router';


// REDUX - CLEAN UP THIS FILE AFTER U ARE DONE!

var isAscPrice = undefined,
    isAscDate = undefined;

const productsReducer = (state=[], action) => {

  switch(action.type) {

    case 'FETCH_PRODUCTS': {

      state = state.concat(action.payload);
      return state;
    }

    case 'RESET_PRODUCT_LIST': {
      state = [];
      return state;
    }

    case 'CREATE_PRODUCT': {

      state = state.concat(action.payload);
      return state;
    }

    default:
    return state;
  }
};

const sortOrderReducer = (state='name', action) => {
  switch(action.type) {
    case 'SORT_PRODUCTS': {

      state = action.payload;
      return state;
    }
    default:
    return state;
  }
};

const productsAvailableReducer = (state=true, action) => {
  switch(action.type) {
    case 'SHOW_NO_PRODUCT_MESSAGE': {
      state = action.payload;
      return state;
    }
    default:
    return state;
  }
};

const pageCountReducer = (state=1, action) => {
  switch(action.type) {
    case 'COUNT_PRODUCT_PAGES': {
      state = state + action.payload;
      return state;
    }
    case 'ZERO_PRODUCT_PAGES_COUNT': {
      state = 1;
      return state;
    }
    default:
    return state;
  }
};

const gridClasses = {
    grid: 'width100',
    gridImage: 'width100',
    tileWidth: 6
  };

const gridClassesReducer = (state=gridClasses, action) => {

  switch(action.type) {

    case 'SWITCH_GRID': {

      state = action.payload.newClasses;
      return state;
    }

    default:
    return state;
  }
};

const reducers = combineReducers({
  products: productsReducer,
  gridClasses: gridClassesReducer,
  productsAvailable: productsAvailableReducer,
  pageCount: pageCountReducer,
  sortOrder: sortOrderReducer,
  routing: routerReducer
})

const throttleMiddleware = throttleActions(['SHOW_NO_PRODUCT_MESSAGE', 'FETCH_PRODUCTS', 'COUNT_PRODUCT_PAGES'], 1000);

const store = createStore(reducers, compose(applyMiddleware(thunk),  window.devToolsExtension && window.devToolsExtension()));

const history = syncHistoryWithStore(browserHistory, store);

export {store, history};