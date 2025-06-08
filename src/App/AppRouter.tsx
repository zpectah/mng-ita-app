import { lazy } from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import config from '../config';
import { AppLayout } from '../components';
import { Error, Home } from '../modules';

const CognatesFF = lazy(() => import('../modules/CognatesFF/CognatesFF'));
const Cognates1000 = lazy(() => import('../modules/Cognates1000/Cognates1000'));
const Similarities = lazy(() => import('../modules/Similarities/Similarities'));
const Memo = lazy(() => import('../modules/Memo/Memo'));

const AppRouter = () => {
  const { routes } = config;
  const router = createBrowserRouter([
    {
      id: 'view.error',
      path: '*',
      element: <Error />,
    },
    {
      path: '/',
      element: <Navigate replace to={routes.home.path} />,
    },
    {
      element: <AppLayout />,
      children: [
        {
          id: 'view.home',
          path: routes.home.path,
          element: <Home />,
        },
        {
          id: 'view.cognates-ff',
          path: routes.cognatesFF.path,
          element: <CognatesFF />,
        },
        {
          id: 'view.cognates-1000',
          path: routes.cognates1000.path,
          element: <Cognates1000 />,
        },
        {
          id: 'view.similarities',
          path: routes.similarities.path,
          element: <Similarities />,
        },
        {
          id: 'view.memo',
          path: routes.memo.path,
          element: <Memo />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
