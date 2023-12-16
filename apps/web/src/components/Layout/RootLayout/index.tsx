import React from 'react';
import { Container } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';
import { routerPaths } from '../../../routerPaths';

function RootLayout() {
  if (!localStorage.getItem('access_token')) {
    return <Navigate to={routerPaths.Login} />;
  }

  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default RootLayout;
