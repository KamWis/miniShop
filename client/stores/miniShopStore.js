import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';
import productsArray from '../tmpProductsArray';
import {combineReducers, createStore} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {routerReducer} from 'react-router-redux';

class MiniShopStore extends EventEmitter {

  constructor() {
    super();

    this.products = productsArray;
    this.gridClasses = {
      grid: 'width100',
      gridImage: 'width100',
      tileWidth: 6
    };
  }

  createProduct(name, price, date) {

    this.products.push({
      name,
      price,
      date,
      link: 'http://thecatapi.com/api/images/get?format=src&type=jpg&category=space'
    })

    this.emit('change');
  }

  // HANDLE INCOMING ACTIONS AND SET NEW OBJECTS
  // - EMMIT CHANGES TO COMPONENT

  handleActions(action) {

    switch(action.type) {

      case 'CREATE_PRODUCT': {
        this.createProduct(action.name, action.price, action.date);
        break;
      }

      case 'SORT_PRODUCTS': {

        this.products = action.resortedProducts;
        this.emit('change');
        break;
      }

      case 'SWITCH_GRID': {

        this.gridClasses = action.newClasses;
        this.emit('change');
        break;
      }
    }
  }

  // SEND WHOLE OBJECTS

  getAll() {
    return this.products;
  }

  getClasses() {
    return this.gridClasses;
  }
}






// REDUX - CLEAN UP THIS FILE AFTER U ARE DONE!

var isAscPrice = undefined,
    isAscDate = undefined;

const productsReducer = (state=productsArray, action) => {

  switch(action.type) {

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
          product.index = count++;
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
          product.index = count++;
          return product;
        })
      }

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
  routing: routerReducer
})

const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());

const history = syncHistoryWithStore(browserHistory, store);




const miniShopStore = new MiniShopStore;
dispatcher.register(miniShopStore.handleActions.bind(miniShopStore));

export {miniShopStore, store, history};