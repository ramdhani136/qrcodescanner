import {createSlice} from '@reduxjs/toolkit';

export const valueSlice = createSlice({
  name: 'value',
  initialState: {},
  reducers: {
    getValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {getValue} = valueSlice.actions;

export const selectValue = state => state.value;

export default valueSlice.reducer;
