import dispatcher from '../dispatcher';
import {store} from '../stores/miniShopStore';

// export function createProduct(name, price, date) {
//   dispatcher.dispatch({
//     type: 'CREATE_PRODUCT',
//     name,
//     price,
//     date
//   });
// }
// export function sortProducts(resortedProducts) {
//   dispatcher.dispatch({
//     type: 'SORT_PRODUCTS',
//     resortedProducts
//   })
// }

// export function gridSwitcher(newClasses) {
//   dispatcher.dispatch({
//     type: 'SWITCH_GRID',
//     newClasses
//   })
// }

export function createProduct(name, price, date) {
  store.dispatch({
    type: 'CREATE_PRODUCT',
    payload: {
      name,
      price,
      date,
      link: 'http://thecatapi.com/api/images/get?format=src&type=jpg&category=space'
    }
  });
}

export function sortProducts(resortedProducts) {
  store.dispatch({
    type: 'SORT_PRODUCTS',
    payload: resortedProducts
  })
}