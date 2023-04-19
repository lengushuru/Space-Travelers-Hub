import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Missions from '../components/pages/Missions';

afterEach(cleanup);

describe('missions tests', () => {
  it('Mission to match Snapshot', () => {
    const missions = render(<Provider store={store}><Missions /></Provider>);
    expect(missions).toMatchSnapshot();
  });
});