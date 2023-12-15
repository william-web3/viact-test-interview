import React from 'react';
import { useRoutes } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import GuestLayout from './components/Layout/GuestLayout';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';

function AppRouter() {
  const router = useRoutes([
    {
      id: 'guest',
      element: <GuestLayout />,
      children: [
        {
          path: '/',
          element: <SignInPage />,
        },
        {
          path: '/signup',
          element: <SignUpPage />,
        },
      ],
    },
  ]);

  return router;
}

export default AppRouter;
