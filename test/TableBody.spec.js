'use strict';

import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import TableBody from '../TableBody/TableBody';

import mockData from './mock_data.json';

describe('The TableBody component', () => {
  let renderer;
  let output;
  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(<TableBody data={mockData.tasks} />)
    output = renderer.getRenderOutput();
  });
  it('should render a tbody', () => {
    expect(output.type).to.equal('tbody');
  });
  it('should render every data row in the array', () => {
    const children = output.props.children;
    expect(children.length).to.equal(mockData.tasks.length);
  });
});
