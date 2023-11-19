// searchSlice.tsx
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store'; // Подставьте путь к вашему корневому типу состояния

interface SearchState {
  inputValue: string;
}

const searchSlice = createSlice({
  name: 'search',
  initialState: { inputValue: '' } as SearchState,
  reducers: {
    setSearchInput: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const { setSearchInput } = searchSlice.actions;
export const selectSearchInput = (state: RootState) => state.search.inputValue;

export default searchSlice.reducer;
