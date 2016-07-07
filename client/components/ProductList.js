import React from 'react';// eslint-disable-line
import {Row, Col} from 'react-bootstrap';
import ProductTile from './ProductTile';
import {connect} from 'react-redux';



export class ProductList extends React.Component {

  constructor() {
    super();
  }

  render() {

    return(
      <Row>
        <Col sm={12} className="product_row_spacing">
          <Row>
            {this.props.productList.map((product, index) => {

              return <ProductTile
                        key={index}
                        index={product.id}
                        productName={product.name}
                        imgLink={product.picture}
                        price={product.price}
                        date={product.postDate}
                      />;
            })}
            <Col sm={12} className={this.props.productsAvailable ? 'hidden' : '' } >
              There is no more product to load...
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    productList: state.products,
    productsAvailable: state.productsAvailable,
    gridClasses: state.gridClasses
  };
}

export default connect(mapStateToProps)(ProductList);