import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import HelloWorld from '../../src/components/HelloWorld';

describe('HelloWorld', function () {
  let component;

  beforeEach(function () {
    component = ReactTestUtils.renderIntoDocument(<HelloWorld />);
  });

  it('renders hello world message', function () {
    let domNode = ReactDOM.findDOMNode(component);
    expect(domNode.innerText).toBe('Hello World!');
  });
});
