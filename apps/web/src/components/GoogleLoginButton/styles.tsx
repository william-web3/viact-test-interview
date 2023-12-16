import { Button, styled } from '@mui/material';

export const ButtonStyled = styled(Button)`
  background: ${({ theme }) => (theme as any).palette?.button?.google};
  color: white;
  height: 48px;
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 12px;

  &:hover {
    background: ${({ theme }) => (theme as any).palette?.button?.google};
  }
`;
