import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rockets from '../components/pages/Rockets';

afterEach(cleanup);

describe('Rockets', () => {
  it('Rockets to match Snapshot', () => {
    const rockets = render(<Provider store={store}><Rockets /></Provider>);
    expect(rockets).toMatchSnapshot();
  });
});
