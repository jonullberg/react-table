'use strict';

import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import DataTable from '../';
import mockData from './mock_data.json';

describe('The DataTable component', () => {
  let renderer;
  let output;
  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(<DataTable data={mockData.jobs} classNamePrefix="mock-" />);
    output = renderer.getRenderOutput();
  });
  it('should render a table', () => {
    expect(output.type).to.equal('table');
  });
  it('should have two children', () => {
    const children = output.props.children;
    expect(children.length).to.equal(2);
  });
});
