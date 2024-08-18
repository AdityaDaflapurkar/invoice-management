import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useAppSelector } from '../../store/hooks';

const VendorDetails: React.FC = () => {
  const { name, address, phoneNumber } = useAppSelector((state) => state.invoiceDraft.vendor);

  return (
    <>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Box sx={{ padding: 2 }}>
          <Typography variant='h6' gutterBottom>
            Verify Vendor Details
          </Typography>
          <Typography variant='body1'>
            <strong>Name:</strong> {name}
          </Typography>
          <Typography variant='body1'>
            <strong>Address:</strong> {address}
          </Typography>
          <Typography variant='body1'>
            <strong>Phone Number:</strong> {phoneNumber}
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default VendorDetails;
