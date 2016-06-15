import React from "react";
import { Col, DropdownButton, MenuItem } from 'react-bootstrap';
import SortBy from './SortBy';

const TopToolbar = () => (

  <Col sm={12} className="top-margin-40 nav-bar-top">
    <Col sm={6}>

      <input className="input-top_search" type="text" placeholder="Search for product..." />
    </Col>

    <Col sm={5}>

      <SortBy />
    </Col>
    <Col sm={1}>
      <div className="pull-right">
        <i className="material-icons grid-icons">&#xE8EF;</i>
        <i className="material-icons grid-icons">&#xE8F0;</i>
      </div>
    </Col>
  </Col>
);

export default TopToolbar;