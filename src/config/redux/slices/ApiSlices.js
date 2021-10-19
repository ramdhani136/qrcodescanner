import {createSlice} from '@reduxjs/toolkit';

export const ApiSlices = createSlice({
  name: 'value',
  initialState: {tes: 'satu', coba: 2},
  reducers: {
    getApi: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {getApi} = ApiSlices.actions;

export const selectApi = state => state.value;

export default ApiSlices.reducer;
