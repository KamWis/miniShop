import React from 'react';
import {Row, Col} from 'react-bootstrap';
import ProductTile from './ProductTile';
import {connect} from 'react-redux';

const ProductList = (props) => (

  <Row>
    <Col sm={12} className="product_row_spacing">
      <Row>
        {props.productList.map((product, index) => {

        return <ProductTile
                  key={index}
                  index={index}
                  productName={product.name}
                  imgLink={product.link}
                  price={product.price}
                  date={product.date}
                  />
      })}
      </Row>
    </Col>
  </Row>
)

function mapStateToProps(state) {
  return {
    productList: state.products,
    gridClasses: state.gridClasses
  }
}

export default connect(mapStateToProps)(ProductList);
// export default ProductList