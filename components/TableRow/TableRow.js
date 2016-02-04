/**
 * The TableRow component
 * This component takes a JSON object, iterates over its keys and creates a
 * row of data to display in the table.
 * Created by Jonathan Ullberg on 02/04/2016
 */
'use strict';

import React, { Component, PropTypes } from 'react';

export default class TableRow extends Component {
  constructor() {
    super();
    this.rowClicked = this.rowClicked.bind(this);
  }

  rowClicked(e) {
    const { row, onRowClicked } = this.props;
    e.preventDefault();
    onRowClicked(row);
  }
  render() {
    let { row, classNamePrefix } = this.props;
    let cells = Object.keys(row).map((key, i) => {
      let value = (Array.isArray(row[key])) ?
        row[key].map((item, i, arr) => {
          return (i === arr.length - 1) ?
            item :
            item + ',\n';
        }) :
        row[key];
      return <td key={i} className={classNamePrefix + 'TableRow_cell'}>{value}</td>
    });
    return (
      <tr className={classNamePrefix + 'TableRow'}
        onClick={this.rowClicked}>
        {cells}
      </tr>
    )
  }
}

TableRow.propTypes = {
  row: PropTypes.object,
  onRowClicked: PropTypes.func,
  classNamePrefix: PropTypes.string
}
