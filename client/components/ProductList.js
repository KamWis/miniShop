import React from 'react';
import {Row, Col} from 'react-bootstrap';
import ProductTile from './ProductTile';

const ProductList = ({prodList}) => (

  <Row>
    <Col sm={12} className="product_row_spacing">
      <Row>
        {prodList.map((product, index) => {

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

export default ProductList;