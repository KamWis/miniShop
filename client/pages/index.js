import React from "react";
import TopToolbar from 'components/TopToolbar';
import ProductList from 'components/ProductList';
import {store} from '../stores/miniShopStore';
import {fetchProducts, productPageCount} from '../actions/index';
import throttle from 'lodash.throttle';

export default class Index extends React.Component {

  constructor() {

    super();
  }

  componentDidMount() {

    $.material.init();
    window.addEventListener('scroll', throttle(this.handleScroll.bind(this), 1000));
  }



  componentWillUnmount() {

    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll (event) {

    const scrollTop = event.target.scrollingElement.scrollTop;
    const bodyHeight = event.target.scrollingElement.clientHeight;

    if(scrollTop + window.innerHeight == bodyHeight) {

      store.dispatch(fetchProducts(this.props.pageCount));
    }

  }

  render() {

    return (

      <div>
        <TopToolbar sortList={this.props.sortProducts} gridClasses={this.props.gridClasses} gridSwitcher={this.props.gridSwitcher} />
        <ProductList />
      </div>
    )
  }
}

