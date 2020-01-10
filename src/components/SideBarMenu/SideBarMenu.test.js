import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import SideBarMenu from './';

describe('The Side Bar Menu component', () => {

  let wrapper = mount(<MemoryRouter><SideBarMenu /></MemoryRouter>)
  it('should render The sidebar menu correctly', () => {
    expect(wrapper.find('NavLink').length).toBe(2);
  });
});
