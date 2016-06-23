import React from 'react';
import Header from './header';
import {Grid} from 'react-bootstrap';

 const Container = React.createClass ({

  render() {

    const {
      createProduct,
      gridClasses,
      gridSwitcher,
      productList,
      sortProducts
      } = this.props;

    return (
      <Grid>
        <Header />

        {React.cloneElement(this.props.children, {createProduct, gridClasses, gridSwitcher, productList, sortProducts})}
      </Grid>
    )
  }
});

export default Container;