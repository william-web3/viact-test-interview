import styled from '@emotion/styled';
import { Box, Link, Paper, Typography } from '@mui/material';

export const PaperStyled = styled(Paper)`
  border-radius: 20px;

  ${({ theme }) => {
    return `${[(theme as any).breakpoints.down('md')]} {
    width: 100%;
    margin: 10px;
  `;
  }})
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 12px;
`;

export const TypographyStyled = styled(Typography)`
  font-size: 16px;
  ${({ theme }) => {
    return `${[(theme as any).breakpoints.down('sm')]} {
      font-size: 12px;
    }
  `;
  }})
`;

export const BoxStyled = styled(Box)`
  padding: 30px;
  width: 100%;
  padding-bottom: 0;
  ${({ theme }) => {
    return `${[(theme as any).breakpoints.down('sm')]} {
      padding: 5px;
    }
  `;
  }})
`;
