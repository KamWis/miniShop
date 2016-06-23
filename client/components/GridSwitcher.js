import React from 'react';
import * as miniShopActions from '../actions/index';
import {store} from '../stores/miniShopStore';

export default class GridSwitcher extends React.Component {
  constructor() {
    super();
  }

  switchClasses(icon){

    const {gridClasses} = this.props;
    const {grid, gridImage, tileWidth} = gridClasses;

    let newClasses = {};

    if(icon) {

      if(icon === 'list' && grid !== 'width80') {

        newClasses = {
            grid: 'width80',
            gridImage: 'width20',
            tileWidth: 12
          }
      }

      if(icon === 'grid' && grid !== 'width100') {

        newClasses = {
            grid: 'width100',
            gridImage: 'width100',
            tileWidth: 6
          }
      }

      this.props.gridSwitcher(
        newClasses
      )
    }
  }

  render() {

    return (
      <div className="pull-right">
        <i className="material-icons grid-icons" onClick={this.switchClasses.bind(this, "list")}>view_list</i>
        <i className="material-icons grid-icons" onClick={this.switchClasses.bind(this, "grid")}>view_module</i>
      </div>
    );
  }
}
