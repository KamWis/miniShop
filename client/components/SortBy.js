import React from "react";
import { Col, DropdownButton, MenuItem } from 'react-bootstrap';

const SortBy = () => (

  <div className="pull-right">
    <span className="sort--aligment">Sort by:</span>
    <DropdownButton bsStyle="default" className="btn btn-raised" title="Select" id="nav-dropdown">
      <MenuItem>Price</MenuItem>
      <MenuItem>Date</MenuItem>
    </DropdownButton>
  </div>
  );

export default SortBy;