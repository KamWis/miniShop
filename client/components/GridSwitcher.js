import React from 'react';

export default class GridSwitcher extends React.Component {

  constructor() {
    super();

    this.classes = {

      grid: 'width100',
      gridImage: 'width100',
      tileWidth: 6

    };
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

      const gridClasses = [
          this.classes.grid,
          this.classes.gridImage,
          this.classes.tileWidth
      ]

      this.props.updateGridSwitcherHandler(this.classes);
    }
  }

  render() {
    return (
      <div className="pull-right">
        <i className="material-icons grid-icons" onClick={this.switchClasses.bind(this, "list")}>&#xE8EF;</i>
        <i className="material-icons grid-icons" onClick={this.switchClasses.bind(this, "grid")}>&#xE8F0;</i>
      </div>
    );
  }
}
