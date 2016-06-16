import React from 'react';
import Header from './header';
import TopToolbar from './TopToolbar';
import ProductList from './ProductList';
import {Grid} from 'react-bootstrap';
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

      <Grid>
        <Header />
        <TopToolbar getSwitcherClasses={this.updateGridSwitcher.bind(this)} />
        <ProductList
          productsArray={productsArray}
          changesClasses={this.state}
        />
      </Grid>
    )
  }
}