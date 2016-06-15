import React from 'react';
import {Col} from 'react-bootstrap';


export default class ProductTile extends React.Component {

  constructor() {
    super();

    this.state = {

      default: 'yellow',
      secondary: 'black'
    };
  }

  switchClass() {

    if(this.state.default === 'yellow') {

      this.setState(
        {
          default: 'green'
        }
      );
    } else {

      this.setState(
        {
          default: 'yellow'
        }
      );
    }
  }

  render() {

    return (
      <Col sm={6}>
        <div className="product_image--grid width100">

          <img src={this.props.imgLink} />
        </div>
        <div className="width100" onClick={this.switchClass.bind(this)}>
          <Col sm={9} className={this.state.secondary + ' ' + this.state.default}>
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
