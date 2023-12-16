import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { GuestBackgroundStyled } from './styled';
import { routerPaths } from '../../../routerPaths';

function GuestLayout() {
  if (localStorage.getItem('access_token')) {
    return <Navigate to={routerPaths.Dashboard} />;
  }

  return (
    <GuestBackgroundStyled>
      <Outlet />
    </GuestBackgroundStyled>
  );
}

export default GuestLayout;
