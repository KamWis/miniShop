import React from 'react';
import Header from './header';
import {Grid} from 'react-bootstrap';

export default class Container extends React.Component {

  render() {

    return (
      <Grid>
        <Header />

        {this.props.children}
      </Grid>
    )
  }
}