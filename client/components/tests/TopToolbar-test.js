import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import TopToolbar from '../TopToolbar';

let component;

describe('TopToolbar component', () => {

  beforeEach(() => {

    component = TestUtils.renderIntoDocument(<TopToolbar />);
  });

  it('renders without problems', () => {

    expect(component).toExist();
  });

  it('set fetchOryginal to true when string is length is >= 3', () => {

    let input = TestUtils.findRenderedDOMComponentWithClass(
      component,
      'input-top_search'
    );
    input.value = 'test';

    TestUtils.Simulate.change(input);

    expect(component.state.fetchOryginal).toBe(true);
  });

  it('set fetchOryginal to false when string is length is < 3', () => {

    let input = TestUtils.findRenderedDOMComponentWithClass(
      component,
      'input-top_search'
    );
    input.value = 'te';

    TestUtils.Simulate.change(input);

    expect(component.state.fetchOryginal).toBe(false);
  });
});