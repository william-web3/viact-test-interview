import React from 'react';

import { Box, Button, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { StyledLink } from '../../styles';
import { TypographyStyled } from './styles';
import { useTheme } from '@emotion/react';

function TermAndCondition() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'inline', cursor: 'pointer' }}>
      <StyledLink variant="body2" color="text.secondary" onClick={handleClickOpen}>
        Terms and Conditions for Free Trial.
      </StyledLink>
      <Dialog open={open} maxWidth="md">
        <CardContent>
          <DialogTitle id="alert-dialog-title" sx={{ pb: '0px', fontsize: '22px' }}>
            viAct’s Terms and Conditions for Free Trial
            <Typography sx={{ color: '#939393', marginBottom: '20px', fontSize: '12px', mt: '5px' }}>
              Last updated April 9, 2020
            </Typography>
          </DialogTitle>

          <DialogContent>
            <TypographyStyled sx={{ fontWeight: '700' }}>AGREEMENT TO TERMS</TypographyStyled>
            <TypographyStyled>
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or
              on behalf of an entity and VIACT, concerning your access to and use of the free trial.
            </TypographyStyled>
            <TypographyStyled>
              You agree that by accessing the free trial, you have read, understood, and agree to be bound by all of
              these Terms and Conditions. If you do not agree with all of these Terms and Conditions, then you are
              expressly prohibited from using the free trial and you must discontinue use immediately.
            </TypographyStyled>
            <TypographyStyled>
              We reserve the right, in our sole discretion, to make changes or modifications to these Terms and
              Conditions at any time and for any reason.
            </TypographyStyled>
            <TypographyStyled>
              We will alert you about any changes by updating the “Last updated” date of these Terms and Conditions, and
              you waive any right to receive specific notice of each such change.
            </TypographyStyled>
            <TypographyStyled>
              It is your responsibility to periodically review these Terms and Conditions to stay informed of updates.
              You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in
              any revised Terms and Conditions by your continued use of the free trial after the date such revised Terms
              and Conditions are posted.
            </TypographyStyled>
            <TypographyStyled>
              The information provided on the free trial is not intended for distribution to or use by any person or
              entity in any jurisdiction or country where such distribution or use would be contrary to law or
              regulation or which would subject us to any registration requirement within such jurisdiction or country.
            </TypographyStyled>
            <TypographyStyled>
              Accordingly, those persons who choose to access the free trial from other locations do so on their own
              initiative and are solely responsible for compliance with local laws, if and to the extent local laws are
              applicable.
            </TypographyStyled>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              autoFocus
              sx={{
                textTransform: 'uppercase',
                background: (theme as any).palette?.button?.primary,
                color: 'white',
                fontSize: '12px',
              }}
            >
              Close
            </Button>
          </DialogActions>
        </CardContent>
      </Dialog>
    </Box>
  );
}

export default TermAndCondition;
