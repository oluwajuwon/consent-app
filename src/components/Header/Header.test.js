import React from 'react';
import { mount } from 'enzyme';
import Header from './';

describe('The Header component', () => {

  let wrapper = mount(<Header />)
  it('should render The header component correctly', () => {
    expect(wrapper.find('header').length).toBe(1);
    expect(wrapper.find('h6').length).toBe(1);
  });
});
