import styled from '@emotion/styled';
import { Box, CardContent, Container } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export const ContainerStyled = styled(Container)`
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 10px;
  display: flex;
`;

export const SignInForm = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginButton = styled(LoadingButton)`
  background: ${({ theme }) => (theme as any).palette?.button?.primary};
  color: white;
  height: 48px;
  font-weight: 700;
  font-size: 12px;

  &:hover {
    background: ${({ theme }) => (theme as any).palette?.button?.primary};
  }
`;

export const LoginLogo = styled(Box)`
  img {
    max-width: 100%;
    height: auto;
    ${({ theme }) => {
      return `${[(theme as any).breakpoints.down('sm')]} {
          width: 200px !important;
      }
    `;
    }})
  }
`;
