import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';

import App from './App';
import Index from './pages/index';
import AddNewProduct from './pages/AddNewProduct';
import {store, history} from './stores/miniShopStore';

import '../public/build/js/material.min.js';
import '../public/build/js/ripples.min.js';

import '../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import '../node_modules/bootstrap-material-design/dist/css/ripples.min.css';
import './stylesheets/style.sass';




const router = (
          <Router history={history}>
            <Route path="/" component={App}>

              <IndexRoute component={Index} ></IndexRoute>
              <Route path="addNewProduct" component={AddNewProduct}></Route>
            </Route>
          </Router>
        );

ReactDOM.render(

 <Provider store={store}>{router}</Provider>,
  document.getElementById('app')
);