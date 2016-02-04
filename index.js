/**
 * The entry point for the DataTable component
 * This component takes an array of JSON objects, passes the first object to
 * the header to create the headings for each column and passes the array to
 * the TableBody to display the data
 * Each element of the data array needs to have a full data set.
 * Eventually I can add the ability to parse non-values but right now it
 * doesn't do that.
 * Created by Jonathan Ullerg on 02/04/2016
 */

'use strict';

import React, { Component, PropTypes } from 'react';

import TableHeader from './TableHeader/TableHeader';
import TableBody from './TableBody/TableBody';

export default class DataTable extends Component {
  render() {
    let { data, onHeaderClicked, onRowClicked, classNamePrefix } = this.props;
    return (
      <table className={classNamePrefix + 'DataTable'}>
        <TableHeader
          classNamePrefix={classNamePrefix}
          keys={Object.keys(data[0])}
          onHeaderClicked={onHeaderClicked}
        />
        <TableBody
          classNamePrefix={classNamePrefix}
          data={data}
          onRowClicked={onRowClicked}
        />
      </table>
    )
  }
}

DataTable.propTypes = {
  data: PropTypes.array,
  onHeaderClicked: PropTypes.func,
  onRowClicked: PropTypes.func,
  classNamePrefix: PropTypes.string
}
