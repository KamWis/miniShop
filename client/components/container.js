import React from 'react';
import Header from './header';
import {Grid} from 'react-bootstrap';

export default class Container extends React.Component {

  render() {

    const {
      createProduct,
      gridClasses,
      gridSwitcher,
      sortProducts,
      pageCount,
      productsAvailable
    } = this.props;

    return (
      <Grid>
        <Header />

        {React.cloneElement(this.props.children, {createProduct, gridClasses, gridSwitcher, sortProducts, pageCount, productsAvailable})}
      </Grid>
    )
  }
};

