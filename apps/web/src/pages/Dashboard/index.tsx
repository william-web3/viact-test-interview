import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routerPaths } from '../../routerPaths';

function Dashboard() {
  const navigate = useNavigate();
  const onSignOut = () => {
    localStorage.removeItem('access_token');
    setTimeout(() => {
      navigate(routerPaths.Login);
    }, 200);
  };

  return (
    <Container sx={{ height: '100vh', display: 'flex', flexDirection: 'column', pt: '25%' }}>
      <Typography fontSize={24} textAlign="center">
        Login successfully.
      </Typography>
      <Typography fontSize={16} textAlign="center">
        Welcome to VIACT!
      </Typography>
      <Button variant="outlined" onClick={onSignOut} sx={{ maxWidth: '120px', margin: '0 auto', mt: 2 }}>
        Log out
      </Button>
    </Container>
  );
}

export default Dashboard;
