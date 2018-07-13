import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'

describe('<About />', () => {

  it('should be defined', () => {
    expect(About).to.be.a('function');
  });

});