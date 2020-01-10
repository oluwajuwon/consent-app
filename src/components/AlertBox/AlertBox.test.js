import React from 'react';
import { mount } from 'enzyme';
import AlertBox from './';

describe('The Alert box component', () => {

  const props = {
    showAlert: true, 
    handleCloseAlert: () => jest.fn(), 
    type: 'success', 
    message: 'Successfully given consent'
  }

  let wrapper = mount(<AlertBox {...props} />)
  it('should render The Alert box correctly', () => {
    expect(wrapper.find('Alert').length).toBe(1);
    expect(wrapper.find('Alert').prop('type')).toEqual('success');
  });
});
