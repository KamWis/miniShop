import React from 'react';
import {Col} from 'react-bootstrap';
import miniShopStore from '../stores/miniShopStore';


export default class ProductTile extends React.Component {

  constructor() {
    super();

  }
  render() {

    const classes = miniShopStore.getClasses();

    return (
      <Col sm={classes.tileWidth} className="single_tile">
        <div className={"product_image--grid" + ' ' + classes.gridImage}>

          <img src={this.props.imgLink} />
        </div>
        <div className={classes.grid + ' product_data_row'}>
          <Col xs={9}>
            <div className="width100 large_title">
              <h3 className="text-info">{this.props.productName}</h3>
            </div>
            <div className="width100">

              <p className="date">{new Date(parseInt(this.props.date)).toLocaleDateString()}</p>
            </div>
          </Col>
          <Col xs={3}>
            <p className="price">${this.props.price}</p>
          </Col>
        </div>
      </Col>
    )
  }
}
