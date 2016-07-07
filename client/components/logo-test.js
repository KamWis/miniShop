import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import logo from './logo';


describe('logo', function () {
  it('renders without problems', function () {
    const logo = TestUtils.renderIntoDocument(<logo />);
    expect(logo).toExist();
  });
});