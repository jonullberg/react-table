'use strict';

import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import { TableHeader } from '../components';

import mockData from './mock_data.json';


describe('The TableHeader component', () => {
  let renderer;
  let output;
  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(<TableHeader keys={Object.keys(mockData.tasks[0])} />)
    output = renderer.getRenderOutput();
  });
  it('should render a thead', () => {
    expect(output.type).to.equal('thead');
  });
  it('should have th cells equal to the number of key-value pairs in the passed down data', () => {
    const children = output.props.children.props.children;
    const expectedQuantity = Object.keys(mockData.tasks[0]).length
    expect(children.length).to.equal(expectedQuantity);
  })
})
