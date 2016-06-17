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
      tileWidth: 6
    }
  }

  updateGridSwitcher(classes) {

    this.setState({

      grid: classes.grid,
      gridImage: classes.gridImage,
      tileWidth: classes.tileWidth
    })
  }

  render() {

    return (

      <div>
        <TopToolbar getSwitcherClasses={this.updateGridSwitcher.bind(this)} />
        <ProductList
          productsArray={productsArray}
          changesClasses={this.state}
        />
      </div>
    )
  }
}