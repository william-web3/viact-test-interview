import React from 'react';
import { useRoutes } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import GuestLayout from './components/Layout/GuestLayout';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import { routerPaths } from './routerPaths';
import RootLayout from './components/Layout/RootLayout';
import Dashboard from './pages/Dashboard';

function AppRouter() {
  const router = useRoutes([
    {
      id: 'guest',
      element: <GuestLayout />,
      children: [
        {
          path: routerPaths.Login,
          element: <SignInPage />,
        },
        {
          path: routerPaths.Signup,
          element: <SignUpPage />,
        },
      ],
    },
    {
      id: 'root',
      element: <RootLayout />,
      children: [
        {
          path: routerPaths.Dashboard,
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return router;
}

export default AppRouter;
