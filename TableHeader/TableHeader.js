/**
 * The TableHeader component
 * This component will take an array of object and create headings for the
 * table based on the keys of the object
 * Created by Jonathan Ullberg on 01/13/2016
 */
'use strict';

import React, { Component, PropTypes } from 'react';

export default class TableHeader extends Component {
  render() {
    const { keys, onHeaderClicked, classNamePrefix } = this.props;

    const headers = keys.map((key, i) => {
      return (
        <th key={i}
          className={classNamePrefix + 'TableHeader_heading'}
          onClick={e => {
            e.preventDefault();
            onHeaderClicked({key});
          }}
        >
        {key}
        </th>
      );
    })
    return (
      <thead className={classNamePrefix + 'TableHeader'}>
        <tr>
          {headers}
        </tr>
      </thead>
    );
  }
}

TableHeader.propTypes = {
  keys: PropTypes.array.isRequired,
  onHeaderClicked: PropTypes.func,
  classNamePrefix: PropTypes.string
}
