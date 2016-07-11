import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import Header from '../header';


describe('header', function () {

  const header = TestUtils.renderIntoDocument(<Header />);

  it('renders without problems', () => {

    expect(header).toExist();
  });

  it('renders button with "Add new product" text', () => {

    const button = TestUtils.findRenderedDOMComponentWithTag(
          header, 'button'
      );

    expect(ReactDOM.findDOMNode(button).textContent).toEqual("Add new product");
  });

  it('have links of length 2', () => {

    const link = TestUtils.scryRenderedDOMComponentsWithTag(
          header, 'a'
      );

    expect(link.length).toEqual(2);
  });
});
