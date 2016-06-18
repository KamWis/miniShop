import React from "react";
import TopToolbar from '../components/TopToolbar';
import ProductList from '../components/ProductList';
import productsArray from '../tmpProductsArray';
import miniShopStore from '../stores/miniShopStore';

export default class Container extends React.Component {

  constructor(props) {
    super(props);

    this.forceUpdateFnc = this.ForceUpdateFnc.bind(this);

  }

  componentWillMount() {
    miniShopStore.on('change', this.forceUpdateFnc);
  }

  componentWillUnmount() {

    miniShopStore.removeListener('change', this.forceUpdateFnc);
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