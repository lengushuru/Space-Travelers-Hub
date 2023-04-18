import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Navbar from '../components/Navbar';

describe('Link', () => {
  it('links component should match snapshot', () => {
    const homeLink = render(
      <BrowserRouter>
        {' '}
        <Provider store={store}><Navbar /></Provider>
        {' '}
      </BrowserRouter>,
    );
    expect(homeLink).toMatchSnapshot();
  });
});
