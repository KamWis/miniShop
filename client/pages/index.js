import React from "react";
import TopToolbar from 'components/TopToolbar';
import ProductList from 'components/ProductList';
import {store} from '../stores/miniShopStore';
import {fetchProducts} from '../actions/index';

export default class Index extends React.Component {

  constructor() {

    super();
  }

  componentDidMount() {

    $.material.init();
    this.pageCount = 1;
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }



  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll (event) {

    const scrollTop = event.target.scrollingElement.scrollTop;
    const bodyHeight = event.target.scrollingElement.clientHeight;


    if(scrollTop + window.innerHeight == bodyHeight) {
      this.pageCount++;
      store.dispatch(fetchProducts(this.pageCount));
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

