import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';

test('renders the not found page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/random']}>
    <App />)
    </MemoryRouter>
  );
  expect(wrapper.find(NotFoundPage)).toHaveLength(1);
});
