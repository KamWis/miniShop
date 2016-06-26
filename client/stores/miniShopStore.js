import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';
import productsArray from '../tmpProductsArray';
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

    case 'CREATE_PRODUCT': {

      state = state.concat(action.payload);
      return state;
    }

    case 'SORT_PRODUCTS': {

      if(action.payload.order === 'priceAsc' || action.payload.order === 'dateAsc'){

        if(action.payload.order === 'priceAsc') {
          isAscPrice = true;
        }
        if(action.payload.order === 'dateAsc') {
          isAscDate = true;
        }

        state = state.sort(function(a, b) {

            return parseFloat(a[action.payload.type]) - parseFloat(b[action.payload.type]);
        });
        let count = 0;
        state = state.map(function(product){
          product.id = count++;
          return product;
        })
      }
      const priceDescCheck = action.payload.order === 'priceDesc' && (isAscPrice || isAscPrice === undefined),
            dateDescCheck = action.payload.order === 'dateDesc' && (isAscDate || isAscDate === undefined);

      if(priceDescCheck || dateDescCheck) {

        if(action.payload.order === 'priceDesc') {
          isAscPrice = false;
          isAscDate = true;
        }
        if(action.payload.order === 'dateDesc') {
          isAscDate = false;
          isAscPrice = true;
        }

        state = state.sort(function(a, b) {

            return parseFloat(a[action.payload.type]) + parseFloat(b[action.payload.type]);
        });
        let count = 0;
        state = state.map(function(product){
          product.id = count++;
          return product;
        })
      }

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
}

const pageCountReducer = (state=1, action) => {
  switch(action.type) {
    case 'COUNT_PRODUCT_PAGES': {
      state = state + action.payload;
      return state;
    }
    default:
    return state;
  }
}

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
  routing: routerReducer
})

const throttleMiddleware = throttleActions(['SHOW_NO_PRODUCT_MESSAGE', 'FETCH_PRODUCTS', 'COUNT_PRODUCT_PAGES'], 1000);

const store = createStore(reducers, compose(applyMiddleware(thunk),  window.devToolsExtension && window.devToolsExtension()));

const history = syncHistoryWithStore(browserHistory, store);

export {store, history};