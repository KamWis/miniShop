import React from 'react';
import {Col} from 'react-bootstrap';


export default class ProductTile extends React.Component {

  render() {

    return (
      <Col sm={this.props.tileWidth}>
        <div className={"product_image--grid" + ' ' + this.props.gridImage}>

          <img src={this.props.imgLink} />
        </div>
        <div className={this.props.grid}>
          <Col sm={9}>
            <div class="width100">
              {this.props.productName}
            </div>
            <div class="width100">
              {this.props.date}
            </div>
          </Col>
          <Col sm={3}>
            {this.props.price}
          </Col>
        </div>
      </Col>
    )
  }
}
