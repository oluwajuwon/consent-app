import React from 'react';
import { mount } from 'enzyme';
import CheckboxGroup from './';

describe('The Checkbox Group component', () => {

  const props = {
    checkItems: [
      { label: 'Receive newsletter', value: 'newsletter' },
    ],
    handleChange: jest.fn(),
    checked: {
      newsletter: false,
    }
  }
  let wrapper = mount(<CheckboxGroup {...props} />)
  it('should render The Checkbox group correctly', () => {
    expect(wrapper.find('CheckboxGroup').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find("input[value='newsletter']").prop('checked')).toEqual(false);
  });
});
