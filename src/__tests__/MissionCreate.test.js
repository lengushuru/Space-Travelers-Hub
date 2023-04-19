import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MissionCreate from '../redux/missions/MissionCreate';

afterEach(cleanup);

describe('missions tests', () => {
  it('MissionCreate to match Snapshot', () => {
    const missionCreate = render(<Provider store={store}><MissionCreate /></Provider>);
    expect(missionCreate).toMatchSnapshot();
  });
});