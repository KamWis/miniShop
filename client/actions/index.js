import dispatcher from '../dispatcher';

export function createProduct(name, price, date) {
  dispatcher.dispatch({
    type: 'CREATE_PRODUCT',
    name,
    price,
    date
  });
}

export function sortProducts(resortedProducts) {
  dispatcher.dispatch({
    type: 'SORT_PRODUCTS',
    resortedProducts
  })
}

export function gridSwitcher(newClasses) {
  dispatcher.dispatch({
    type: 'SWITCH_GRID',
    newClasses
  })
}