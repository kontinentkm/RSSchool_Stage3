import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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

const postsSlice = createSlice({
  name: 'posts',
  initialState: { posts: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      });
  },
});

export const selectPosts = (state) => state.posts.posts;
export const selectLoading = (state) => state.posts.loading;

export default postsSlice.reducer;
