import axios from 'axios';
import * as action from '../constants';

export function resetProductList() {

  return {
    type: action.RESET_PRODUCT_LIST
  };
}

export function createProduct(name, price, date, link) {

  const request = axios.post('/api/Product', {
    name,
    price,
    postDate: date,
    picture: link
  });

  return () => {

    request.then(() => {

    }).catch(function(err) {
      console.log(err);// eslint-disable-line
    });
  };
}

export function fetchProducts(queryString='', pageNumber=1, order='name', resetList=false) {

  const request = axios.get('/api/Product?search=' + queryString + '&page=' + pageNumber + '&order=' + order);

  return (dispatch) => {

    dispatch({type: action.ACTIVE_SPINNER, payload: true});

    request.then(({data}) => {

      dispatch({type: action.ACTIVE_SPINNER, payload: false});

      if(typeof data === 'object') {

        if(resetList) {

          dispatch({type: action.RESET_PRODUCT_LIST});
          dispatch({type: action.FETCH_PRODUCTS, payload: data});
        } else {

          dispatch({type:action.ADD_PRODUCTS, payload: data});
        }

        dispatch({type: action.COUNT_PRODUCT_PAGES, payload: 1});
        dispatch({type: action.SHOW_NO_PRODUCT_MESSAGE, payload: true});
        dispatch({type: action.SORT_PRODUCTS, payload: order});
        dispatch({type: action.QUERY_STRING, payload: queryString});
      }
      else {

        if(resetList) {

          dispatch({type: action.RESET_PRODUCT_LIST});
        }

        dispatch({type: action.SHOW_NO_PRODUCT_MESSAGE, payload: false});

        if(queryString.length >= 3) {

          dispatch({type: action.CHANGE_NO_PRODUCT_MESSAGE, payload: 'No products matching your criteria...'});
        } else {

          dispatch({type: action.CHANGE_NO_PRODUCT_MESSAGE, payload: 'No more products to load...'});
        }
      }
    }).catch(function(err) {

      dispatch({type: action.ACTIVE_SPINNER, payload: false});
      console.log(err);// eslint-disable-line
    });
  };
}

export function productPageCount() {

  return {
    type: action.COUNT_PRODUCT_PAGES,
    payload: 1
  };
}

export function zeroProductPageCount() {

  return {
    type: action.ZERO_PRODUCT_PAGES_COUNT
  };
}

export function gridSwitcher(newClasses) {

  return {
    type: action.SWITCH_GRID,
    payload: {
      newClasses
    }
  };
}