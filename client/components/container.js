import React from 'react';
import Header from './header';
import {Grid} from 'react-bootstrap';
import ConnectionDialog from './ConnectionDialog';

export default class Container extends React.Component {

  constructor() {
    super();
  }

  render() {

    const {
      createProduct,
      gridClasses,
      gridSwitcher,
      pageCount,
      productsAvailable
    } = this.props;

    return (
      <Grid>
        <Header />

        {React.cloneElement(this.props.children, {createProduct, gridClasses, gridSwitcher, pageCount, productsAvailable})}

        <ConnectionDialog />
      </Grid>
    );
  }
}

