import React from 'react';
import Header from './header';
import TopToolbar from './TopToolbar';
import ProductList from './ProductList';
import {Grid} from 'react-bootstrap';

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

    const productsArray = [
      {
        name: 'product1',
        link: 'http://thecatapi.com/api/images/get?format=src&type=jpg&category=sunglasses',
        date: '12-04-2016',
        price: '$300'
      },
      {
        name: 'product2',
        link: 'http://thecatapi.com/api/images/get?format=src&type=jpg&category=hats',
        date: '11-04-2016',
        price: '$260'
      },
      {
        name: 'product3',
        link: 'http://thecatapi.com/api/images/get?format=src&type=jpg&category=space',
        date: '10-04-2016',
        price: '$120'
      },
      {
        name: 'product4',
        link: 'http://thecatapi.com/api/images/get?format=src&type=jpg&category=boxes',
        date: '09-04-2016',
        price: '$400'
      },
      {
        name: 'product1',
        link: 'http://thecatapi.com/api/images/get?format=src&type=jpg&category=sunglasses',
        date: '12-04-2016',
        price: '$300'
      },
      {
        name: 'product2',
        link: 'http://thecatapi.com/api/images/get?format=src&type=jpg&category=hats',
        date: '11-04-2016',
        price: '$260'
      },
      {
        name: 'product3',
        link: 'http://thecatapi.com/api/images/get?format=src&type=jpg&category=space',
        date: '10-04-2016',
        price: '$120'
      },
      {
        name: 'product4',
        link: 'http://thecatapi.com/api/images/get?format=src&type=jpg&category=boxes',
        date: '09-04-2016',
        price: '$400'
      }
    ];

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