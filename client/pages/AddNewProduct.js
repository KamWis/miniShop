import React from "react";
import * as miniShopActions from '../actions/index';

export default class AddNewProduct extends React.Component {

  componentDidMount() {

    $.material.init();
  }

  createProduct() {

    const productNameInput = this.refs.prodName,
          productPriceInput = this.refs.prodPrice,
          productName = productNameInput.value,
          productPrice = productPriceInput.value,
          productDate = Date.now();

    this.props.createProduct(
      productName,
      productPrice,
      productDate
    );
  }

  render() {

    return (

      <div>
        <label for="product_name">Product name:</label>
        <input ref="prodName" id="product_name" />
        <label for="product_price">Product price:</label>
        <input ref="prodPrice" id="product_price" />

        <button className="btn btn-info btn-raised" onClick={this.createProduct.bind(this)}>Create Product!</button>
      </div>
    )
  }
}