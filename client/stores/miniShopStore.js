import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import {browserHistory} from 'react-router';

import * as reducer from '../reducers';

const reducers = combineReducers({
  activeSpinner: reducer.activeSpinnerReducer,
  products: reducer.productsReducer,
  gridClasses: reducer.gridClassesReducer,
  productsAvailable: reducer.productsAvailableReducer,
  pageCount: reducer.pageCountReducer,
  sortOrder: reducer.sortOrderReducer,
  queryString: reducer.queryStringReducer,
  routing: routerReducer
});


const finalCreateStore = compose(
  applyMiddleware(thunk)
  // window.devToolsExtension && window.devToolsExtension()
)(createStore);

const store = finalCreateStore(reducers);

const history = syncHistoryWithStore(browserHistory, store);

export {store, history};