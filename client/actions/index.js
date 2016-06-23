export function createProduct(name, price, date) {
  return {
    type: 'CREATE_PRODUCT',
    payload: {
      name,
      price,
      date,
      link: 'http://thecatapi.com/api/images/get?format=src&type=jpg&category=space'
    }
  };
}

export function sortProducts(order, type) {
  return {
    type: 'SORT_PRODUCTS',
    payload: {
      order,
      type
    }
  }
}

export function gridSwitcher(newClasses) {
  return {
    type: 'SWITCH_GRID',
    payload: {
      newClasses
    }
  }
}