import { Button, Typography, styled } from '@mui/material';

export const TypographyStyled = styled(Typography)`
  font-size: 0.8571428571428571rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  margin-bottom: 10px;
  color: #000000de;

  ${({ theme }) => {
    return `${[(theme as any).breakpoints.down('md')]} {
      font-size: 12px;
      margin-bottom: 5px;
      `;
  }})
`;

export const ButtonStyled = styled(Button)`
  &:hover {
    background: #83e8ff;
    color: white;
  }
`;
