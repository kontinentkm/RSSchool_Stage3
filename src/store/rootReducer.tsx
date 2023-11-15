import { combineReducers } from '@reduxjs/toolkit';
import { api } from '../api';
import postsReducer from '../features/postsSlice';
import searchReducer from '../features/searchSlice';
import postsPerPageReducer from '../features/postsPerPageSlice';

const rootReducer = combineReducers({
  search: searchReducer,
  posts: postsReducer,
  postsPerPage: postsPerPageReducer,
  [api.reducerPath]: api.reducer,
});

export default rootReducer;
