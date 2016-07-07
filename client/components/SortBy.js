import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import {fetchProducts, zeroProductPageCount} from '../actions/index';
import {store} from '../stores/miniShopStore';

export default class SortBy extends React.Component {

  constructor() {
    super();
  }

  handleClick(order) {
    store.dispatch(zeroProductPageCount());
    store.dispatch(fetchProducts(store.getState().queryString, store.getState().pageCount, order, true));
  }

  render(){

    return (

      <div className="pull-right">
        <span className="sort--aligment">Sort by:</span>
        <DropdownButton bsStyle="default" className="btn btn-raised" title="Select" id="nav-dropdown">
          <MenuItem onClick={() => {this.handleClick('price');}}>Price Asc.</MenuItem>
          <MenuItem onClick={() => {this.handleClick('-price');}}>Price Desc.</MenuItem>
          <MenuItem onClick={() => {this.handleClick('postDate');}}>Date Asc.</MenuItem>
          <MenuItem onClick={() => {this.handleClick('-postDate');}}>Date Desc.</MenuItem>
        </DropdownButton>
      </div>
    );
  }
}