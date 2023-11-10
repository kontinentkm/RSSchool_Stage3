import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './router/router';
import { SearchProvider } from './components/Search/SearchContext';
import { PostsProvider } from './pages/Posts/PostsContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SearchProvider>
      <PostsProvider>
        <RouterProvider router={router} />
      </PostsProvider>
    </SearchProvider>
  </React.StrictMode>
);
