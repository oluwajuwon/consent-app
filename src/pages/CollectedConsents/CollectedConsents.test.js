import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CollectedConsents from './';

import store from '../../store';

describe('The Collected Consents page', () => {

  const props = {
    consents: [
      {
        name: 'Bojack Horseman',
        email: 'bojack@horseman.com',
        selectedItems: [ 'Receive newsletter', 'Be shown targeted ads' ]
      },
      {
        name: 'Rick',
        email: 'Rick@morty.com',
        selectedItems: [ 'Receive newsletter', 'Be shown targeted ads' ]
      }
    ],
    getConsents: jest.fn()
  };

  let wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <CollectedConsents {...props} />
      </MemoryRouter>
    </Provider>
  );

  it('should render the Collected Consents page correctly', () => {
    expect(wrapper.find('CollectedConsents').length).toBe(1);
  });

  it('should render the paginated table correctly', () => {
    expect(wrapper.find('PaginatedTable').length).toBe(1);
    expect(wrapper.find('table').length).toBe(1);
    expect(wrapper.find('thead').length).toBe(1);
    expect(wrapper.find('th').length).toBe(3);
  });
});
