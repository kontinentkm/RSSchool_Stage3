// searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: { inputValue: '' },
  reducers: {
    setSearchInput: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const { setSearchInput } = searchSlice.actions;
export const selectSearchInput = (state) => state.search.inputValue;

export default searchSlice.reducer;
