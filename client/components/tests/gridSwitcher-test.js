import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import GridSwitcher from '../GridSwitcher';
import ProductTile from '../ProductTile';

let singleTileComponent,
  singleTile,
  gridSwitch,
  viewList,
  viewGrid

describe('gridSwitcher component', () => {

  beforeEach(() => {

    singleTileComponent = TestUtils.renderIntoDocument(<ProductTile />);
    gridSwitch = TestUtils.renderIntoDocument(<GridSwitcher />);

    viewList = TestUtils.findRenderedDOMComponentWithClass(
      gridSwitch,
      'view_list'
    );
    viewGrid = TestUtils.findRenderedDOMComponentWithClass(
      gridSwitch,
      'view_grid'
    );
  });

  it('renders GridSwitcher component without problems', () => {

    expect(gridSwitch).toExist();
  });

  it('renders ProductTile component without problems', () => {

    expect(singleTileComponent).toExist();
  });

  it('product list should be in grid state', () => {

    singleTile = TestUtils.findRenderedDOMComponentWithClass(
      singleTileComponent,
      'single_tile'
    );

    expect(singleTile.getAttribute('class')).toBe('single_tile col-sm-6');
  });

  it('clicking view_list should switch grid to list', () => {

    TestUtils.Simulate.click(viewList);

    singleTileComponent = TestUtils.renderIntoDocument(<ProductTile />);

    singleTile = TestUtils.findRenderedDOMComponentWithClass(
      singleTileComponent,
      'single_tile'
    );

    expect(singleTile.getAttribute('class')).toBe('single_tile col-sm-12');
  });

  it('clicking view_grid should switch list to grid', () => {

    TestUtils.Simulate.click(viewGrid);

    singleTileComponent = TestUtils.renderIntoDocument(<ProductTile />);

    singleTile = TestUtils.findRenderedDOMComponentWithClass(
      singleTileComponent,
      'single_tile'
    );

    expect(singleTile.getAttribute('class')).toBe('single_tile col-sm-6');
  });
});