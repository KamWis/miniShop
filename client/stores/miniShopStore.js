import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import throttleActions from "redux-throttle-actions";
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import {browserHistory} from 'react-router';
import * as a from '../constants';


// REDUX - CLEAN UP THIS FILE AFTER U ARE DONE!

const productsReducer = (state=[], action) => {

  switch(action.type) {

    case a.ADD_PRODUCTS: {

      state = state.concat(action.payload);
      return state;
    }

    case a.RESET_PRODUCT_LIST: {
      state = [];
      return state;
    }

    case a.CREATE_PRODUCT: {

      state = state.concat(action.payload);
      return state;
    }

    case a.FETCH_PRODUCTS: {

      state = action.payload;
      return state;
    }

    default:
    return state;
  }
};

const sortOrderReducer = (state='name', action) => {
  switch(action.type) {
    case a.SORT_PRODUCTS: {

      state = action.payload;
      return state;
    }
    default:
    return state;
  }
};

const queryStringReducer = (state='', action) => {
  switch(action.type) {
    case a.QUERY_STRING: {

      state = action.payload;
      return state;
    }
    default:
    return state;
  }
};

const productsAvailableReducer = (state=true, action) => {
  switch(action.type) {
    case a.SHOW_NO_PRODUCT_MESSAGE: {
      state = action.payload;
      return state;
    }
    default:
    return state;
  }
};

const pageCountReducer = (state=1, action) => {
  switch(action.type) {
    case a.COUNT_PRODUCT_PAGES: {
      state = state + action.payload;
      return state;
    }
    case a.ZERO_PRODUCT_PAGES_COUNT: {
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
  queryString: queryStringReducer,
  routing: routerReducer
})

const throttleMiddleware = throttleActions(['SHOW_NO_PRODUCT_MESSAGE', 'FETCH_PRODUCTS', 'COUNT_PRODUCT_PAGES'], 1000);

const store = createStore(reducers, compose(applyMiddleware(thunk),  window.devToolsExtension && window.devToolsExtension()));

const history = syncHistoryWithStore(browserHistory, store);

export {store, history};