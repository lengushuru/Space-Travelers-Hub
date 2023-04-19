import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './features/rockets/rocketSlice';
import mission001Reducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    mission001: mission001Reducer,
    rockets: rocketReducer,
  },
});

export default store;
