import React from 'react';
import { Container } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';
import { routerPaths } from '../../../routerPaths';
import { ACCESS_TOKEN } from '../../../utils/constants';

function RootLayout() {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return <Navigate to={routerPaths.Login} />;
  }

  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default RootLayout;
