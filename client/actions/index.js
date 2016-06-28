import axios from 'axios';

// MAKE TYPES AS CONSTANTS AND CLEAN UP !!!

// SAVE QUERY STRING JUST LIKE ORDER

export function fetchProducts(pageNumber=1, order='name', queryString='') {

  const request = axios.get('/api/Product?page=' + pageNumber + '&order=' + order + '&search=' + queryString);

  return (dispatch) => {

    request.then(({data}) => {

      if(typeof data === 'object') {

        dispatch({type:'FETCH_PRODUCTS', payload: data});

        dispatch({type: 'COUNT_PRODUCT_PAGES', payload: 1});
        dispatch({type:'SHOW_NO_PRODUCT_MESSAGE', payload: true});
      }
       else {
        dispatch({type:'SHOW_NO_PRODUCT_MESSAGE', payload: false});
       }
    }).catch(function(err) {
      console.log(err);
    });
  };
}

export function resetProductList() {

  return {
    type: 'RESET_PRODUCT_LIST'
  }
}

export function createProduct(name, price, date, link) {

  const request = axios.post('/api/Product', {
    name,
    price,
    postDate: date,
    picture: link
  });

  return (dispatch) => {

    request.then(({data}) => {
      console.log('product has beed added');
    }).catch(function(err) {
      console.log(err);
    });
  };
}

export function searchProduct(queryString='', pageNumber=1, order='name') {

  const request = axios.get('/api/Product?search=' + queryString + '&page=' + pageNumber + '&order=' + order);

  return (dispatch) => {

    request.then(({data}) => {

      if(typeof data === 'object') {

        dispatch({type: 'RESET_PRODUCT_LIST'});
        dispatch({type: 'SEARCH_PRODUCT', payload: data});
        dispatch({type: 'COUNT_PRODUCT_PAGES', payload: 1});
        dispatch({type: 'SHOW_NO_PRODUCT_MESSAGE', payload: true});
        dispatch({type: 'SORT_PRODUCTS', payload: order});
      }
       else {
        dispatch({type: 'RESET_PRODUCT_LIST'});
        dispatch({type:'SHOW_NO_PRODUCT_MESSAGE', payload: false});
       }
    }).catch(function(err) {
      console.log(err);
    });
  };
}

export function sortProducts(order) {

  const request = axios.get('/api/Product?page=1&order=' + order);

  return (dispatch) => {

    request.then(({data}) => {

      if(typeof data === 'object') {

        dispatch({type: 'RESET_PRODUCT_LIST'});
        dispatch({type: 'ZERO_PRODUCT_PAGES_COUNT'});
        dispatch({type:'FETCH_PRODUCTS', payload: data});
        dispatch({type: 'COUNT_PRODUCT_PAGES', payload: 1});
        dispatch({type:'SHOW_NO_PRODUCT_MESSAGE', payload: true});
        dispatch({type: 'SORT_PRODUCTS', payload: order});
      }
       else {
        dispatch({type:'SHOW_NO_PRODUCT_MESSAGE', payload: false});
       }
    }).catch(function(err) {
      console.log(err);
    });
  };
}

export function gridSwitcher(newClasses) {
  return {
    type: 'SWITCH_GRID',
    payload: {
      newClasses
    }
  }
}

export function productPageCount() {
  return {
    type: 'COUNT_PRODUCT_PAGES',
    payload: 1
  }
}

export function zeroProductPageCount() {
  return {
    type: 'ZERO_PRODUCT_PAGES_COUNT'
  }
}