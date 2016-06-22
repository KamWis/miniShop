import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';
import productsArray from '../tmpProductsArray';
import {combineReducers, createStore} from 'redux';

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



const productsReducer = (state=productsArray, action) => {

  switch(action.type) {

    case 'CREATE_PRODUCT': {
      state = state.concat(action.payload);
      break;
    }

    case 'SORT_PRODUCTS': {
      state = action.payload;
      break;
    }
  }

  return state;
};

const gridClasses = {
    grid: 'width100',
    gridImage: 'width100',
    tileWidth: 6
  };

const gridClassesReducer = (state=gridClasses, action) => {

  return state;
};

const reducers = combineReducers({
  products: productsReducer,
  gridClasses: gridClassesReducer
})

const store = createStore(reducers);



const miniShopStore = new MiniShopStore;
dispatcher.register(miniShopStore.handleActions.bind(miniShopStore));

export {miniShopStore, store};