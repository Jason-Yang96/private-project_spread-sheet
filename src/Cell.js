import React, { Component } from 'react'

export class Cell extends Component {
    constructor(row, col, cellName, cellData, isHeader, disabled){
        this.row = row;
        this.col = col;
        this.cellName = cellName;
        this.cellData = cellData;
        this.isHeader = isHeader;
        this.disabled = false;
    }
    render() {
    return (
    )
  }
}

export default Cell