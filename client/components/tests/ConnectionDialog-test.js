import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import ConnectionDialog from '../ConnectionDialog';

let connectionDialogComponent;

describe('ConnectionDialog', function () {
  it('renders without problems', () => {

    connectionDialogComponent = TestUtils.renderIntoDocument(<ConnectionDialog />);
    expect(connectionDialogComponent).toExist();
  });

  it('has showModal state set to false by default', () => {

    expect(connectionDialogComponent.state.showModal).toBe(false);
  });

  it('has showModal set to true by setState', () => {

    connectionDialogComponent.setState({ showModal: true });

    expect(connectionDialogComponent.state.showModal).toBe(true);
  });
});