import React from 'react';
import { Col } from 'react-bootstrap';
import SortBy from './SortBy';
import GridSwitcher from './GridSwitcher';
import {zeroProductPageCount, fetchProducts} from '../actions/index';
import {store} from '../stores/miniShopStore';


export default class TopToolbar extends React.Component {

  constructor() {
    super();

    this.state = {
      fetchOryginal: false
    };
  }

  searchHelper() {

    const inputValue = this.refs.searchInput.value;

    if(inputValue.length >= 3) {

      store.dispatch(zeroProductPageCount());
      store.dispatch(fetchProducts(inputValue, store.getState().pageCount, store.getState().sortOrder, true));

      this.setState({
        fetchOryginal: true
      });
    }

    if(inputValue.length < 3 && this.state.fetchOryginal) {

      store.dispatch(zeroProductPageCount());
      store.dispatch(fetchProducts('', 1, store.getState().sortOrder, true));

      this.setState({
        fetchOryginal: false
      });
    }
  }

  render() {

    return (
      <Col sm={12} className="top-margin-40 nav-bar-top">
        <Col sm={6}>

          <input className="input-top_search" ref="searchInput" type="text" onChange={this.searchHelper.bind(this)} placeholder="Search for product..." />
        </Col>

        <Col sm={4} xs={8} className="pull-left sort-by-section">

          <SortBy />
        </Col>
        <Col sm={2} xs={4} className="pull-left">
          <GridSwitcher gridSwitcher={this.props.gridSwitcher} />
        </Col>
      </Col>
    );
  }
}