import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { GuestBackgroundStyled } from './styled';
import { routerPaths } from '../../../routerPaths';
import { ACCESS_TOKEN } from '../../../utils/constants';

function GuestLayout() {
  if (localStorage.getItem(ACCESS_TOKEN)) {
    return <Navigate to={routerPaths.Dashboard} />;
  }

  return (
    <GuestBackgroundStyled>
      <Outlet />
    </GuestBackgroundStyled>
  );
}

export default GuestLayout;
