import React from 'react';

export default class AddNewProduct extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      prodNameValid: 'has-info',
      prodPriceValid: 'has-info',
      inputContainerCass: 'form-group label-floating'
    };
  }

  componentDidMount() {

    $.material.init(); // eslint-disable-line
  }

  createProduct() {

    const prodNInput = this.refs.prodName,
      prodPInput = this.refs.prodPrice,
      productName = prodNInput.value,
      productPrice = prodPInput.value,
      productDate = Date.now(),
      productLink = 'http://thecatapi.com/api/images/get?format=src&type=jpg&category=space';

    this.setState({
      prodNameValid: 'has-info',
      prodPriceValid: 'has-info'
    });



    if(this.fieldsValidation({productName, productPrice})) {

      this.props.createProduct(
        productName.toLowerCase(),
        productPrice,
        productDate,
        productLink
      );
    }
  }

  fieldsValidation(inputs) {
    const namePatern = /^[A-Za-z0-9_. ]+$/,
      pricePatern = /^[1-9]\d*(((,\d{0,2}){1})?(\.\d{0,2})?)$/;
    let valid = true;

    if(!namePatern.test(inputs.productName)) {

      this.setState({
        prodNameValid: 'has-error'
      });

      valid = false;
    }

    if(inputs.productName.length > 35) {

      this.setState({
        prodNameValid: 'has-error'
      });

      valid = false;
    }

    if(!pricePatern.test(inputs.productPrice)) {

      this.setState({
        prodPriceValid: 'has-error'
      });

      valid = false;
    }

    if(inputs.productPrice.length > 5) {

      this.setState({
        prodPriceValid: 'has-error'
      });

      valid = false;
    }

    return valid;
  }

  resetOnChange() {
    if(this.state.prodNameValid === 'has-error') {

      this.setState({
        prodNameValid: 'has-info'
      });
    }
    if(this.state.prodPriceValid === 'has-error')  {

      this.setState({
        prodPriceValid: 'has-info'
      });
    }
  }

  // NEED TO MAKE SEPERATE COMPONENTS FOR THIS INPUT GROUPS
  render() {

    return (

      <div><br />
        <h1 className="text-info center">ADD NEW PRODUCT!</h1>

        <div className={this.state.inputContainerCass + ' ' + this.state.prodNameValid}>
          <label htmlFor="product_name" className="control-label">Product name:</label>
          <input ref="prodName" className="form-control" id="product_name" onKeyUp={this.resetOnChange.bind(this)} />
          <span className={this.state.prodNameValid === 'has-error' ? 'error-block text-danger' : 'hidden'}>This field is invalid.</span>
        </div>

        <div className={this.state.inputContainerCass + ' ' + this.state.prodPriceValid}>
          <label htmlFor="product_price" className="control-label">Product price:</label>
          <input ref="prodPrice" className="form-control" id="product_price" onKeyUp={this.resetOnChange.bind(this)} />
          <span className={this.state.prodPriceValid  === 'has-error' ? 'error-block text-danger' : 'hidden'}>This field is invalid.</span>
        </div>

        <button className="btn btn-info btn-raised" onClick={this.createProduct.bind(this)}>Create Product!</button>
      </div>
    );
  }
}