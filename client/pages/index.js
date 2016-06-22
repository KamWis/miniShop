import React from "react";
import TopToolbar from 'components/TopToolbar';
import ProductList from 'components/ProductList';
import productsArray from '../tmpProductsArray';
import {miniShopStore, store} from '../stores/miniShopStore';

export default class Container extends React.Component {

  constructor() {

    super();
    this.forceUpdateFnc = this.ForceUpdateFnc.bind(this);
  }

  componentWillMount() {

    miniShopStore.on('change', this.forceUpdateFnc);
    // store.subscribe(() =>{this.forceUpdate()});

  }

  componentDidMount() {

    $.material.init();
  }

  componentWillUnmount() {

    miniShopStore.removeListener('change', this.forceUpdateFnc);
    // store.subscribe(() =>{});
  }

  ForceUpdateFnc() {
    this.forceUpdate();
  }

  render() {

    return (

      <div>
        <TopToolbar />
        <ProductList />
      </div>
    )
  }
}

