import React from 'react';
import ReactDOM from 'react-dom';
import Teams from './Teams';
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'

describe('<Teams />', () => {

  it('should be defined', () => {
    expect(Teams).to.be.a('function');
  });

});