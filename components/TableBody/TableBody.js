/**
 * The TableBody component
 * This component takes an array of JSON objects passed to it from props,
 * iterates over each JSON element and creates rows of data to display in the
 * table.
 * Created by Jonathan Ullberg on 02/04/2016
 */
'use strict';

import React, { Component, PropTypes } from 'react';

import {
  TableRow
} from '../';

export default class TableBody extends Component {
  render() {
    let { data, onRowClicked, classNamePrefix } = this.props;
    let rows = data.map((row, i) => {
      return (
        <TableRow
          key={i}
          row={row}
          onRowClicked={onRowClicked}
          classNamePrefix={classNamePrefix}
        />
      );
    });
    return (
      <tbody className={classNamePrefix + 'TableBody'}>
        {rows}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  data: PropTypes.array,
  onRowClicked: PropTypes.func,
  classNamePrefix: PropTypes.string
}
