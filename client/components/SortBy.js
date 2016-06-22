import React from "react";
import { Col, DropdownButton, MenuItem } from 'react-bootstrap';
import {miniShopStore} from '../stores/miniShopStore';
import * as miniShopActions from '../actions/index';


export default class SortBy extends React.Component {

  sortBy(order, type){

    let newProdArray;

    if(order === 'priceAsc' || order === 'dateAsc'){

      newProdArray = miniShopStore.getAll().sort(function(a, b) {

          return parseFloat(a[type]) - parseFloat(b[type]);
      });
    }

    if(order === 'priceDesc' || order === 'dateDesc') {

      newProdArray = miniShopStore.getAll().sort(function(a, b) {

          return parseFloat(a[type]) + parseFloat(b[type]);
      });
    }

    miniShopActions.sortProducts(newProdArray);
  }

  render(){

    return (

      <div className="pull-right">
        <span className="sort--aligment">Sort by:</span>
        <DropdownButton bsStyle="default" className="btn btn-raised" title="Select" id="nav-dropdown">
          <MenuItem onClick={this.sortBy.bind(this, 'priceAsc', 'price')}>Price Asc.</MenuItem>
          <MenuItem onClick={this.sortBy.bind(this, 'priceDesc', 'price')}>Price Desc.</MenuItem>
          <MenuItem onClick={this.sortBy.bind(this, 'dateAsc', 'date')}>Date Asc.</MenuItem>
          <MenuItem onClick={this.sortBy.bind(this, 'dateDesc', 'date')}>Date Desc.</MenuItem>
        </DropdownButton>
      </div>
    );
  }
}
