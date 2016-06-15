import React from 'react';
import Logo from './logo';
import { Button, Col } from 'react-bootstrap';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header className='row top-margin-20'>
        <Col sm={6}>
          <Logo />
        </Col>
        <Col sm={6}>
          <Button bsStyle="info" bsSize="large" className="pull-right btn-raised">Add new product</Button>
        </Col>
      </header>
    );
  }
}