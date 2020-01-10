import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import GiveConsent from './';

import store from '../../store';

describe('The Give Consent page', () => {

  const props = {

  };

  let wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <GiveConsent {...props} />
      </MemoryRouter>
    </Provider>
      );
  it('should render Input fields on the page correctly', () => {
    expect(wrapper.find('input#user-name').length).toBe(1);
    expect(wrapper.find('input#user-email').length).toBe(1);
  });
  
  it('should add the values to the input fields correctly', () => {
    wrapper.find('input#user-name').simulate('change', { target: { value: 'Juwon', }});
    wrapper.find('input#user-email').simulate('change', { target: { value: 'jay@email.com'}});
    
    expect(wrapper.find('input#user-name').prop('value')).toEqual('Juwon');
    expect(wrapper.find('input#user-email').prop('value')).toEqual('jay@email.com');
  });

  it('should render the checkbox group on the page correctly', () => {
    expect(wrapper.find('CheckboxGroup').length).toBe(1);

    expect(wrapper.find("input[value='newsletter']").prop('checked')).toEqual(false);
    expect(wrapper.find("input[value='ads']").prop('checked')).toEqual(false);
    expect(wrapper.find("input[value='stats']").prop('checked')).toEqual(false);
  })

  it('should render the give consent button on the page correctly', () => {
    expect(wrapper.find('button').length).toBe(1);
  })
});
