import React from "react";
import TopToolbar from '../components/TopToolbar';
import ProductList from '../components/ProductList';
import productsArray from '../tmpProductsArray';
import miniShopStore from '../stores/miniShopStore';

export default class Container extends React.Component {

  constructor(props) {
    super(props);

    this.getProducts = this.GetProducts.bind(this);
    this.getClasses = this.updateGrid.bind(this);

  }

  componentWillMount() {
    miniShopStore.on('change', this.getProducts);
    miniShopStore.on('change', this.getClasses);
  }

  componentWillUnmount() {
    miniShopStore.removeListener('change', this.getProducts);
    miniShopStore.removeListener('change', this.getClasses);
  }

  updateGrid() {

    this.setState({

      grid: miniShopStore.getClasses().grid,
      gridImage: miniShopStore.getClasses().gridImage,
      tileWidth: miniShopStore.getClasses().tileWidth
    })
  }

  GetProducts() {

    this.setState({
      productsArray: miniShopStore.getAll()
    });
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