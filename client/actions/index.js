import axios from 'axios';

export function fetchProducts() {

  const request = axios.get('/api/Product');

  return (dispatch) => {

    request.then(({data}) => {
      dispatch({type:'FETCH_PRODUCTS', payload: data})
    }).catch(function(err) {
      console.log(err);
    });
  };
}

export function createProduct(name, price, date, link) {

  const request = axios.post('/api/Product', {
    name,
    price,
    date,
    link
  });

  return (dispatch) => {

    request.then(({data}) => {
      dispatch({type:'CREATE_PRODUCT', payload: data})
    }).catch(function(err) {
      console.log(err);
    });
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