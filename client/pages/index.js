import React from "react";
import TopToolbar from 'components/TopToolbar';
import ProductList from 'components/ProductList';

export default class Index extends React.Component {

  constructor() {

    super();
  }

  componentDidMount() {

    $.material.init();
  }

  render() {

    return (

      <div>
        <TopToolbar sortList={this.props.sortProducts} gridClasses={this.props.gridClasses} gridSwitcher={this.props.gridSwitcher} />
        <ProductList prodList={this.props.productList} />
      </div>
    )
  }
}

