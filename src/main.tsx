import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './router/router';
import { SearchProvider } from './components/Search/SearchContext';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
    </Provider>
  </React.StrictMode>
);
