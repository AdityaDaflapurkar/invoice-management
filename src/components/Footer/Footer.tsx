import React from 'react';
import { Box, Button, Grid } from '@mui/material';

const Footer: React.FC = () => {
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
      <Grid container justifyContent='flex-end' spacing={2}>
        <Grid item>
          <Button variant='outlined' color='primary'>
            Cancel
          </Button>
        </Grid>
        <Grid item>
          <Button variant='contained' color='primary'>
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
