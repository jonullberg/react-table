'use strict';

import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import TableRow from '../TableRow/TableRow';

import mockData from './mock_data.json';

describe('The TableRow component', () => {
  let renderer;
  let output;
  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(<TableRow row={mockData.tasks[0]} />);
    output = renderer.getRenderOutput();
  });
  it('should render a tr', () => {
    expect(output.type).to.equal('tr');
  });
  it('should create td cells that match the data objects key-value pairs', () => {
    const actual = output.props.children.length;
    const expected = Object.keys(mockData.tasks[0]).length;
    expect(actual).to.equal(expected);
  });
});
