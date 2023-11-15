import { createSlice } from '@reduxjs/toolkit';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (inputValue) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = res.data;
    const results = data.filter((post) => {
      return (
        post &&
        post.title &&
        post.title.toLowerCase().includes(inputValue.toLowerCase())
      );
    });
    return results;
  }
);

const postsAdapter = createEntityAdapter();

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsAdapter.getInitialState({ loading: false }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        postsAdapter.setAll(state, action.payload);
      });
  },
});

export const { selectAll: selectPosts, selectById: selectPostById } =
  postsAdapter.getSelectors((state) => state.posts);
export const selectLoading = (state) => state.posts.loading;

export default postsSlice.reducer;
