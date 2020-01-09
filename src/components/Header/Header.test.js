import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './';

describe('The Header component', () => {

  let wrapper = mount(<Header />)
  it('should render The header component correctly', () => {
    expect(wrapper.find('h6').length).toBe(1);
  });
});
