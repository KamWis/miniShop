import React from 'react';
import Header from './header';
import TopToolbar from './TopToolbar';
import ProductList from './ProductList';
import {Grid} from 'react-bootstrap';

export default class Container extends React.Component {

  render() {

    const productsArray = [
      {
        name: 'product1',
        link: 'http://thecatapi.com/api/images/get?format=src&type=jpg&category=sunglasses'
      },
      {
        name: 'product2',
        link: 'http://thecatapi.com/api/images/get?format=src&type=jpg&category=hats'
      },
      {
        name: 'product3',
        link: 'http://thecatapi.com/api/images/get?format=src&type=jpg&category=space'
      },
      {
        name: 'product4',
        link: 'http://thecatapi.com/api/images/get?format=src&type=jpg&category=boxes'
      }
    ];

    return (

      <Grid>
        <Header />
        <TopToolbar />
        <ProductList productsArray={productsArray} />
      </Grid>
    )
  }
}