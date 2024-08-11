import React from 'react';
import { Box, Button, Grid } from '@mui/material';
interface FooterProps {
  onClickPrimary: () => void;
  onClickSecondary: () => void;
}
const Footer = ({ onClickPrimary, onClickSecondary }: FooterProps) => {
  return (
    <Box
      sx={{
        padding: 2,
        borderTop: '1px solid #e0e0e0',
        backgroundColor: '#f5f5f5',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <Grid paddingRight={4} container justifyContent='flex-end' spacing={2}>
        <Grid item>
          <Button variant='outlined' color='secondary' onClick={onClickSecondary}>
            Discard
          </Button>
        </Grid>
        <Grid item>
          <Button variant='contained' color='primary' onClick={onClickPrimary}>
            Save and Preview
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
