import React from 'react';
import { shallow } from 'enzyme';
import SideBarMenu from './';

describe('The Side Bar Menu component', () => {

  let wrapper = shallow(<SideBarMenu />)
  it('should render The sidebar menu correctly', () => {
    expect(wrapper.find('NavLink').length).toBe(2);
  });
});
