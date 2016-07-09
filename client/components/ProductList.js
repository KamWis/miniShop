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
            <Col sm={12} className={this.props.productsAvailable.show ? 'hidden' : '' } >
              {this.props.productsAvailable.message}
            </Col>
            <Col sm={12} className={this.props.activeSpinner ? 'show' : 'hidden'} >

              <div className="loader">
                <svg className="circular">
                  <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
                </svg>
              </div>
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
    gridClasses: state.gridClasses,
    activeSpinner: state.activeSpinner
  };
}

export default connect(mapStateToProps)(ProductList);