import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import ProductTile from '../ProductTile';

let component;

let props = {
  imgLink: 'http://thecatapi.com/api/images/get?format=src&type=jpg&category=space',
  productName: 'test',
  date: 1467150384638,
  price: 300
}

describe('ProductTile', () => {

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<ProductTile {...props} />);
  });

  it('should render ProductTile without problems', () => {

    expect(component).toExist();
  });

  it('should have 4x class of width100', () => {

    const hasClass = TestUtils.scryRenderedDOMComponentsWithClass(
      component, 'width100'
    )

    expect(hasClass.length).toEqual(4);
  });

  it('should have class of col-sm-6', () => {

    const hasClass = TestUtils.findRenderedDOMComponentWithClass(
      component, 'col-sm-6'
    )

    expect(hasClass).toExist;
  });

  it('should have h4 with text "test"', () => {

    const headerText = TestUtils.findRenderedDOMComponentWithTag(
      component, 'h4'
    )

    expect(headerText.textContent).toEqual('test');
  });

  it('should have price of 300', () => {

    const price = TestUtils.findRenderedDOMComponentWithClass(
      component, 'price'
    )

    expect(price.textContent).toEqual('$300');
  });

  it('should have date of "28.06.2016"', () => {

    const date = TestUtils.findRenderedDOMComponentWithClass(
      component, 'date'
    )

    expect(date.textContent).toEqual('28.06.2016');
  });
});