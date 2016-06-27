import React from "react";
import { Col, DropdownButton, MenuItem } from 'react-bootstrap';
import SortBy from './SortBy';
import GridSwitcher from './GridSwitcher';

const TopToolbar = ({gridSwitcher}) => (

  <Col sm={12} className="top-margin-40 nav-bar-top">
    <Col sm={6}>

      <input className="input-top_search" type="text" placeholder="Search for product..." />
    </Col>

    <Col sm={4} className="pull-left">

      <SortBy />
    </Col>
    <Col sm={2} className="pull-left">
      <GridSwitcher gridSwitcher={gridSwitcher} />
    </Col>
  </Col>
);

export default TopToolbar;