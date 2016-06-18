import React from "react";
import TopToolbar from '../components/TopToolbar';
import ProductList from '../components/ProductList';
import productsArray from '../tmpProductsArray';

export default class Container extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      grid: 'width100',
      gridImage: 'width100',
      tileWidth: 6,
      productsArray: productsArray
    }
  }

  updateGridSwitcher(classes) {

    this.setState({

      grid: classes.grid,
      gridImage: classes.gridImage,
      tileWidth: classes.tileWidth
    })
  }

  sortProducts(prodArray) {

    this.setState({
      productsArray: prodArray
    })

  }

  render() {

    return (

      <div>
        <TopToolbar getSwitcherClasses={this.updateGridSwitcher.bind(this)} getNewProdListOrder={this.sortProducts.bind(this)} />
        <ProductList
          productsArray={this.state.productsArray}
          changesClasses={this.state}
        />
      </div>
    )
  }
}