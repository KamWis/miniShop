import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import {ProductList} from './ProductList';
import {store} from '../stores/miniShopStore';

let component;

let props = {
  gridClasses: {
    grid: 'width100',
    gridImage: 'width100',
    tileWidth: 6
  },
  productList: store.getState().products
}

describe('ProductList', () => {

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<ProductList {...props} />);
  });

  it('renders without problems', () => {

    expect(component).toExist();
  });

  it('should have grid classes with value "width100"', () => {

    expect(component.props.gridClasses.grid).toBe('width100');
  });

  it('should have gridImage with value "width100"', () => {

    expect(component.props.gridClasses.gridImage).toBe('width100');
  });

  it('should have tileWidth with value "6"', () => {

    expect(component.props.gridClasses.tileWidth).toBe(6);
  });

  it('should have empty array', () => {

    expect(store.getState().products.length).toEqual(0);
  });

  it('should have 4 products in props', () => {


    let props = {
      gridClasses: {
        grid: 'width100',
        gridImage: 'width100',
        tileWidth: 6
      },
      productList: [
        {
          id: 1,
          name: 'test1',
          price: 100,
          postDate: Date.now(),
          picture: ''
        },
        {
          id: 2,
          name: 'test2',
          price: 200,
          postDate: Date.now(),
          picture: ''
        },
        {
          id: 3,
          name: 'test3',
          price: 4100,
          postDate: Date.now(),
          picture: ''
        },
        {
          id: 4,
          name: 'test4',
          price: 500,
          postDate: Date.now(),
          picture: ''
        }
      ]
    }

    component = TestUtils.renderIntoDocument(<ProductList {...props} />);

    expect(component.props.productList.length).toEqual(4);
  });

  it('should render 4 products', () => {

    let props = {
      gridClasses: {
        grid: 'width100',
        gridImage: 'width100',
        tileWidth: 6
      },
      productList: [
        {
          id: 1,
          name: 'test1',
          price: 100,
          postDate: Date.now(),
          picture: ''
        },
        {
          id: 2,
          name: 'test2',
          price: 200,
          postDate: Date.now(),
          picture: ''
        },
        {
          id: 3,
          name: 'test3',
          price: 4100,
          postDate: Date.now(),
          picture: ''
        },
        {
          id: 4,
          name: 'test4',
          price: 500,
          postDate: Date.now(),
          picture: ''
        }
      ]
    }

    component = TestUtils.renderIntoDocument(<ProductList {...props} />);

    const products = TestUtils.scryRenderedDOMComponentsWithClass(
      component, 'single_tile'
    )

    expect(products.length).toEqual(4);
  });

  it('should hide message if there are products', () => {

    let props = {
      productsAvailable: true,
      gridClasses: {
        grid: 'width100',
        gridImage: 'width100',
        tileWidth: 6
      },
      productList: []
    }
    component = TestUtils.renderIntoDocument(<ProductList {...props} />);

        const message = TestUtils.findRenderedDOMComponentWithClass(
          component, 'hidden'
        )

        expect(message).toExist();
  });

  it('should show message if there is no product', () => {

    let props = {
      productsAvailable: false,
      gridClasses: {
        grid: 'width100',
        gridImage: 'width100',
        tileWidth: 6
      },
      productList: []
    }
    component = TestUtils.renderIntoDocument(<ProductList {...props} />);

        const message = TestUtils.scryRenderedDOMComponentsWithClass(
          component, 'hidden'
        )

        expect(message.length).toEqual(0);
  });
});