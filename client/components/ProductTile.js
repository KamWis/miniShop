import React from 'react';
import {Col} from 'react-bootstrap';


export default class ProductTile extends React.Component {

  render() {

    return (
      <Col sm={this.props.tileWidth} className="single_tile">
        <div className={"product_image--grid" + ' ' + this.props.gridImage}>

          <img src={this.props.imgLink} />
        </div>
        <div className={this.props.grid + ' product_data_row'}>
          <Col xs={9}>
            <div className="width100 large_title">
              <h3 className="text-info">{this.props.productName}</h3>
            </div>
            <div className="width100">

              <p className="date">{this.props.date}</p>
            </div>
          </Col>
          <Col xs={3}>
            <p className="price">{this.props.price}</p>
          </Col>
        </div>
      </Col>
    )
  }
}
