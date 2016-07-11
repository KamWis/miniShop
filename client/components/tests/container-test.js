import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import container from '../container';
import {store} from '../../stores/miniShopStore';
import {createProduct, gridSwitcher} from '../../actions';


describe('Container', function () {
  it('renders without problems', () => {

    let props = {
      createProduct: createProduct,
      gridClasses: store.getState().gridClasses,
      gridSwitcher: gridSwitcher,
      pageCount: store.getState().pageCount,
      productsAvailable: store.getState().productsAvailable
    };

    const component = TestUtils.renderIntoDocument(<container {...props} />);
    expect(component).toExist();
  });
});