import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Container from './components/container';
import Index from './pages/index';
import AddNewProduct from './pages/AddNewProduct';

ReactDOM.render(

  <Router history={hashHistory}>
    <Route path="/" component={Container}>

      <IndexRoute component={Index}></IndexRoute>
      <Route path="addNewProduct" component={AddNewProduct}></Route>
    </Route>
  </Router>,

  document.getElementById('app')
);