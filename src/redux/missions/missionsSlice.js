import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import Axios from 'axios';

const initialState = {
  missions: [],
  isLoading: false,
};

const APIurl = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('fetch/missions', async () => {
  try {
    const response = await Axios.get(APIurl);
    return response.data;
  } catch (error) {
    return error;
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.fulfilled,
        (state, { payload }) => ({ ...state, missions: [...payload] }))
      .addCase(fetchMissions.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(fetchMissions.rejected, (state) => ({ ...state, isLoading: false }));
  },
});

export default missionsSlice.reducer;
