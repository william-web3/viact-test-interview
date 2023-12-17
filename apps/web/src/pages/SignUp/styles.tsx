import styled from '@emotion/styled';
import { Box, CardContent, Container, Link, Paper, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export const ContainerStyled = styled(Container)`
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 0;
  display: flex;
`;

export const SignUpPaperStyled = styled(Paper)`
  border-radius: 20px;
  width: 1000px;
  padding: 30px;
  .MuiCardContent-root {
    padding: 0px !important;
  }

  ${({ theme }) => {
    return `${[(theme as any).breakpoints.down('md')]} {
    width: 100%;
    margin: 20px;
    padding: 20px;
  `;
  }})

  .left-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #ebebeb !important;
  }
`;

export const SignUpForm = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormGridLeft = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #ebebeb !important;

  ${({ theme }) => {
    return `${[(theme as any).breakpoints.down('md')]} {
    width: 100%;
    // margin: 20px;
    padding: 10px;
    border-right: 0px!important;
    `;
  }})
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 12px;
`;

export const MediumText = styled(Typography)`
  font-size: 16px;
`;

export const SmallText = styled(Typography)`
  font-size: 12px;
`;

export const SignUpButton = styled(LoadingButton)`
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

export const TypographyStyled = styled(Typography)`
  margin-bottom: 30px;
  font-size: 16px;
  color: #4b4c4c;

  ${({ theme }) => {
    return `${[(theme as any).breakpoints.down('md')]} {
    font-size: 14px;
    margin-bottom: 15px;
    `;
  }})
`;

export const TextHeader = styled(Typography)`
  font-size: 16px;
  ${({ theme }) => {
    return `${[(theme as any).breakpoints.down('sm')]} {
      font-size: 12px;
    }
  `;
  }})
`;
