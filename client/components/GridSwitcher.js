import React from 'react';
import {store} from '../stores/miniShopStore';
import {gridSwitcher} from '../actions';

export default class GridSwitcher extends React.Component {

  constructor() {
    super();
  }

  switchClasses(icon){

    let newClasses = {};

    if(icon) {

      if(icon === 'list') {

        newClasses = {
          grid: 'width80',
          gridImage: 'width20',
          tileWidth: 12
        };
      }

      if(icon === 'grid') {

        newClasses = {
          grid: 'width100',
          gridImage: 'width100',
          tileWidth: 6
        };
      }

      if(Object.keys(newClasses).length != 0 && newClasses.constructor === Object) {

        store.dispatch(gridSwitcher(newClasses));
      } else {

        return false;
      }
    }
  }

  render() {

    return (
      <div className="pull-right">
        <i className="view_list material-icons grid-icons" onClick={() => {this.switchClasses('list');}}>view_list</i>
        <i className="view_grid material-icons grid-icons" onClick={() => {this.switchClasses('grid');}}>view_module</i>
      </div>
    );
  }
}