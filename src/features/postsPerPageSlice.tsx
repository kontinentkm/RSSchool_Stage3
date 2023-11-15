import { createSlice } from '@reduxjs/toolkit';

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
export const selectPostsPerPage = (state) => state.postsPerPage;

export default postsPerPageSlice.reducer;
