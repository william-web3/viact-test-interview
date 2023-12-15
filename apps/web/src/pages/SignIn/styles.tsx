import styled from '@emotion/styled';
import { Box, CardContent, Link, Paper, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export const PaperStyled = styled(Paper)`
  border-radius: 20px;
  width: 520px;
`;

export const SignInForm = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 12px;
`;

export const TypographyStyled = styled(Typography)`
  font-size: 16px;
`;

export const LoginButton = styled(LoadingButton)`
  background: ${({ theme }) => (theme as any).palette?.button?.primary};
  color: white;
  height: 48px;
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 12px;

  &:hover {
    background: ${({ theme }) => (theme as any).palette?.button?.secondary};
  }
`;

export const LoginLogo = styled(Box)`
  .img {
    max-width: 100%;
    height: auto;
  }
`;
