import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import Axios from 'axios';

const initialState = {
  missions: [],
  isLoading: false,
};

const APIurl = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('fetch/missions', async () => {
  const response = await Axios.get(APIurl);
  return response.data;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.fulfilled,
        (state, { payload }) => ({ ...state, missions: [...payload] }));
  },
});

export default missionsSlice.reducer;
