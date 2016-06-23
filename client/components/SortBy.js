import React from "react";
import { Col, DropdownButton, MenuItem } from 'react-bootstrap';
import * as miniShopActions from '../actions/index';


export default class SortBy extends React.Component {

  render(){

    return (

      <div className="pull-right">
        <span className="sort--aligment">Sort by:</span>
        <DropdownButton bsStyle="default" className="btn btn-raised" title="Select" id="nav-dropdown">
          <MenuItem onClick={this.props.sortList.bind(null, 'priceAsc', 'price')}>Price Asc.</MenuItem>
          <MenuItem onClick={this.props.sortList.bind(null, 'priceDesc', 'price')}>Price Desc.</MenuItem>
          <MenuItem onClick={this.props.sortList.bind(null, 'dateAsc', 'date')}>Date Asc.</MenuItem>
          <MenuItem onClick={this.props.sortList.bind(null, 'dateDesc', 'date')}>Date Desc.</MenuItem>
        </DropdownButton>
      </div>
    );
  }
}
