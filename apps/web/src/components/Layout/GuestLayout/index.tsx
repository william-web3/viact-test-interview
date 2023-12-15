import React from 'react';
import { Outlet } from 'react-router-dom';
import { GuestBackgroundStyled } from './styled';

function GuestLayout() {
  return (
    <GuestBackgroundStyled>
      <Outlet />
    </GuestBackgroundStyled>
  );
}

export default GuestLayout;
