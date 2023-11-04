import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Layout from '../pages/Layout/Layout';
import Posts from '../pages/Posts/Posts';
import SinglePost, { singlePostLoader } from '../pages/SinglePost/SinglePost';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Posts />,
        path: 'posts',
        children: [
          {
            element: <SinglePost />,
            path: ':id',
            loader: singlePostLoader,
          },
        ],
      },
    ],
  },
]);
