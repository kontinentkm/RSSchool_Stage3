//router.tsx
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Layout from '../pages/Layout/Layout';
import Posts from '../pages/Posts/Posts';
import SinglePost from '../pages/SinglePost/SinglePost';

export const router = createBrowserRouter([
  {
    path: '/RSSchool_Stage3/dist/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Posts />,
        path: '/RSSchool_Stage3/dist/posts',
        children: [
          {
            element: <SinglePost />,
            path: ':id',
          },
        ],
      },
    ],
  },
]);
