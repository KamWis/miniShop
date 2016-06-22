import React from 'react';
import * as miniShopActions from '../actions/index';
import {miniShopStore} from '../stores/miniShopStore';

export default class GridSwitcher extends React.Component {

  constructor() {
    super();

    this.classes = miniShopStore.getClasses()
  }

  switchClasses(icon){
    if(icon) {

      if(icon === 'list' && this.classes.grid !== 'width80') {

        this.classes = {
            grid: 'width80',
            gridImage: 'width20',
            tileWidth: 12
          }
      }

      if(icon === 'grid' && this.classes.grid !== 'width100') {

        this.classes = {
            grid: 'width100',
            gridImage: 'width100',
            tileWidth: 6
          }
      }

      miniShopActions.gridSwitcher(
        this.classes
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
