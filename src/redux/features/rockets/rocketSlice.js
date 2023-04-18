import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets');
    return response.data;
  } catch (error) {
    return (error.message);
  }
});

const initialState = {
  rockets: [],
  isLoading: true,
};

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    toggleReservedState: (state, action) => {
      const id = action.payload;
      const newRockets = state.rockets.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      });
      return {
        ...state,
        rockets: newRockets,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => ({
      ...state,
      isLoading: true,
    })).addCase(fetchRockets.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      rockets: action.payload,
    })).addCase(fetchRockets.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
  },
});

export const { toggleReservedState } = rocketSlice.actions;

export default rocketSlice.reducer;
