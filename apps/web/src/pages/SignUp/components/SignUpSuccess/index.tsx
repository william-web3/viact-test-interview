import React from 'react';
import { Box, Button, CardContent, Dialog, DialogContent } from '@mui/material';
import { LoginLogo, SmallText, StyledLink } from '../../styles';
import { TypographyStyled, ButtonStyled } from './styles';
import { useTheme } from '@emotion/react';
import { isUndefined } from 'lodash';

interface Props {
  open?: boolean;
  onClose?: () => void;
}

function SignUpSuccess(props: Props) {
  const theme = useTheme();
  return (
    <Dialog open={isUndefined(props.open) ? false : props.open} PaperProps={{ sx: { borderRadius: '20px' } }} onClose={props.onClose}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '20px' }}>
          <LoginLogo>
            <img src="/viact-logo.svg" alt="viact-logo" loading="lazy" style={{ width: '200px' }} />
          </LoginLogo>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
            <SmallText color="text.secondary">Automate</SmallText>
            <SmallText color="text.secondary">Construction</SmallText>
            <SmallText color="text.secondary">Monitoring</SmallText>
          </Box>
        </Box>
        <DialogContent sx={{ textAlign: 'left', padding: '0px 20px 20px' }}>
          <TypographyStyled sx={{ fontWeight: '400', textAlign: 'center', fontSize: '20px', mb: '10px' }}>
            Account Registration Confirmation
          </TypographyStyled>
          <TypographyStyled>
            We have received your account registration request and will review it within 3-5 business days
          </TypographyStyled>
          <TypographyStyled>
            Once your account has been approved, you will receive an email notification with instructions on how to log
            in. If your account is rejected, you will also receive an email notification with the reason for the
            rejection.
          </TypographyStyled>
          <TypographyStyled sx={{ mb: '0' }}>
            Please check your notification email or spam folder regularly for updates. Still having trouble?{' '}
            <StyledLink
              href="mailto:viact@support.ai"
              sx={{ color: '#2f80ed', fontWeight: '400 !important', fontSize: '14px !important' }}
            >
              Contact us.
            </StyledLink>
          </TypographyStyled>
        </DialogContent>
        <ButtonStyled
          href="/"
          autoFocus
          sx={{
            textTransform: 'uppercase',
            background: (theme as any).palette?.button?.primary,
            color: 'white',
            fontSize: '12px',
            margin: 'auto',
            width: '300px',
          }}
        >
          I got it
        </ButtonStyled>
        <Button
          href="/"
          sx={{
            display: 'block',
            fontSize: '0.75rem',
            color: '#4b4c4c',
            textDecoration: 'underline',
            width: 'fit-content',
            margin: 'auto',
            mt: '20px',
          }}
        >
          BACK TO HOME
        </Button>
      </CardContent>
    </Dialog>
  );
}

export default SignUpSuccess;
