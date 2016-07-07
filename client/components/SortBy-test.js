import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import SortBy from './SortBy';
import { MenuItem } from 'react-bootstrap';

describe('sortBy', function () {

  const sortBy = TestUtils.renderIntoDocument(<SortBy />);

  it('renders without problems', () => {

    expect(sortBy).toExist();
  });

  it('should have 4 menu items', () => {

    const menuItems = TestUtils.scryRenderedDOMComponentsWithTag(
          sortBy, 'li'
      );

    expect(menuItems.length).toEqual(4);
  });
});