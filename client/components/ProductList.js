import React from 'react';
import {Row, Col} from 'react-bootstrap';
import ProductTile from './ProductTile';
import {store} from '../stores/miniShopStore';
import {connect} from 'react-redux';

class ProductList extends React.Component {
  constructor() {
    super();
  }

  render() {

    const productList = this.props.list.map((product, index) => {

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

const mapStateToProps = function(store) {
  return {
    list: store.products
  };
}

export default connect(mapStateToProps)(ProductList);