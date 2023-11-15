// searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearchInput: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSearchInput } = searchSlice.actions;
export const selectSearchInput = (state) => state.search;

export default searchSlice.reducer;
