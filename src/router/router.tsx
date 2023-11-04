import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Layout from '../pages/Layout/Layout';
import Posts, { postsLoader } from '../pages/Posts/Posts';
import SinglePost, { singlePostLoader } from '../pages/SinglePost/SinglePost';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'posts',
        element: <Posts />,
        loader: postsLoader,
      },
      {
        path: 'posts/:id',
        element: <SinglePost />,
        loader: singlePostLoader,
      },
    ],
  },
]);
