import axios from 'axios';

export function fetchProducts(pageNumber=1) {

  const request = axios.get('/api/Product?page=' + pageNumber);

  return (dispatch) => {

    request.then(({data}) => {

      if(typeof data === 'object') {

        dispatch({type:'FETCH_PRODUCTS', payload: data});
      }
       else {
        dispatch({type:'SHOW_NO_PRODUCT_MESSAGE', payload: false});
       }
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