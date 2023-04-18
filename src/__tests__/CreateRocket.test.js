import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CreateRocket from '../redux/features/rockets/CreateRocket';

afterEach(cleanup);

describe('CreateRocket', () => {
  it('CreateRocket to match Snapshot', () => {
    const createRocket = render(<Provider store={store}><CreateRocket /></Provider>);
    expect(createRocket).toMatchSnapshot();
  });
});
