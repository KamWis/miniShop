import React from 'react';
import {Row, Col} from 'react-bootstrap';
import ProductTile from './ProductTile';
import miniShopStore from '../stores/miniShopStore';

export default class ProductList extends React.Component {

  render() {

    const productList = miniShopStore.getAll().map((product, index) => {

            return <ProductTile
                      key={index}
                      productName={product.name}
                      imgLink={product.link}
                      price={product.price}
                      date={product.date}
                      />
          });

    return (
      <Row>
        <Col sm={12} className="product_row_spacing">
          <Row>
            {productList}
          </Row>
        </Col>
      </Row>
    );
  }
}