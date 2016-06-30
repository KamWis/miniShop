import axios from 'axios';
import * as action from '../constants';

export function resetProductList() {

  return {
    type: action.RESET_PRODUCT_LIST
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

export function fetchProducts(queryString='', pageNumber=1, order='name', resetList=false) {

  const request = axios.get('/api/Product?search=' + queryString + '&page=' + pageNumber + '&order=' + order);

  return (dispatch) => {

    request.then(({data}) => {

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
       }
    }).catch(function(err) {

      console.log(err);
    });
  };
}

export function productPageCount() {

  return {
    type: action.COUNT_PRODUCT_PAGES,
    payload: 1
  }
}

export function zeroProductPageCount() {

  return {
    type: action.ZERO_PRODUCT_PAGES_COUNT
  }
}

export function gridSwitcher(newClasses) {

  return {
    type: action.SWITCH_GRID,
    payload: {
      newClasses
    }
  }
}