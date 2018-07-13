import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'

describe('<Home />', () => {

  it('should be defined', () => {
    expect(Home).to.be.a('function');
  });

});
