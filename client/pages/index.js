import React from "react";
import TopToolbar from 'components/TopToolbar';
import ProductList from 'components/ProductList';
import {store} from '../stores/miniShopStore';
import {fetchProducts, zeroProductPageCount, sortProducts, resetProductList} from '../actions/index';
import throttle from 'lodash.throttle';

export default class Index extends React.Component {

  constructor() {

    super();

    this.beforeScrollEvent = throttle(this.handleScroll.bind(this), 1000);
  }

  componentWillMount() {

    store.dispatch(zeroProductPageCount());
    store.dispatch(fetchProducts(1, store.getState().sortOrder, true));
  }

  componentDidMount() {

    $.material.init();
    window.addEventListener('scroll', this.beforeScrollEvent);
  }

  componentWillUnmount() {

    window.removeEventListener('scroll', this.beforeScrollEvent);
    store.dispatch(resetProductList());
  }



  handleScroll(event) {

    const scrollTop = event.target.scrollingElement.scrollTop;
    const bodyHeight = event.target.scrollingElement.clientHeight;

    if(scrollTop + window.innerHeight >= bodyHeight - 80) {

      store.dispatch(fetchProducts(store.getState().pageCount, store.getState().sortOrder));
    }
  }

  render() {

    return (

      <div>
        <TopToolbar gridClasses={this.props.gridClasses} gridSwitcher={this.props.gridSwitcher} />
        <ProductList />
      </div>
    )
  }
}