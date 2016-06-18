import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';
import productsArray from '../tmpProductsArray';

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
      }
      break;

      case 'SORT_PRODUCTS': {

        this.products = action.resortedProducts;
        this.emit('change');
      }
      break;

      case 'SWITCH_GRID': {

        this.gridClasses = action.newClasses;
        this.emit('change');
      }
      break;
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

const miniShopStore = new MiniShopStore;
dispatcher.register(miniShopStore.handleActions.bind(miniShopStore));

export default miniShopStore;