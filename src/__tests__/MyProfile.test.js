import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MyProfile from '../components/pages/MyProfile';

afterEach(cleanup);

describe('MyProfile', () => {
  it('MyProfile to match Snapshot', () => {
    const myProfile = render(<Provider store={store}><MyProfile /></Provider>);
    expect(myProfile).toMatchSnapshot();
  });
});
