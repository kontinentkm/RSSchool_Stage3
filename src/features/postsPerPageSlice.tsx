import { createSlice } from '@reduxjs/toolkit';

type RootState = {
  postsPerPage: number;
};

const postsPerPageSlice = createSlice({
  name: 'postsPerPage',
  initialState: 7,
  reducers: {
    setPostsPerPage: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPostsPerPage } = postsPerPageSlice.actions;

export const selectPostsPerPage = (state: RootState) => state.postsPerPage;

export default postsPerPageSlice.reducer;
