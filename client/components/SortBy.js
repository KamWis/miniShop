import React from "react";
import { Col, DropdownButton, MenuItem } from 'react-bootstrap';
import {sortProducts} from '../actions/index';
import {store} from '../stores/miniShopStore';

export default class SortBy extends React.Component {

  constructor() {
    super();
  }

  handleClick(order) {
    store.dispatch(sortProducts(order));
  }

  render(){

    return (

      <div className="pull-right">
        <span className="sort--aligment">Sort by:</span>
        <DropdownButton bsStyle="default" className="btn btn-raised" title="Select" id="nav-dropdown">
          <MenuItem onClick={this.handleClick.bind(this, 'price')}>Price Asc.</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, '-price')}>Price Desc.</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, 'postDate')}>Date Asc.</MenuItem>
          <MenuItem onClick={this.handleClick.bind(this, '-postDate')}>Date Desc.</MenuItem>
        </DropdownButton>
      </div>
    );
  }
}