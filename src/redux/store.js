import { configureStore } from '@reduxjs/toolkit';
import mission001Reducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    mission001: mission001Reducer,
  },
});

export default store;
