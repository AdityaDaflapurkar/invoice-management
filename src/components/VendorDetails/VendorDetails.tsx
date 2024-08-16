import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

interface VendorInfoProps {
  name: string;
  address: string;
  phoneNumber: string;
}

const VendorInfo: React.FC<VendorInfoProps> = ({ name, address, phoneNumber }) => {
  const navigate = useNavigate();
  const onClickSave = () => {
    navigate('/create-invoice');
  };

  return (
    <>
      <Header title='Home'></Header>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Box sx={{ padding: 2 }}>
          <Typography variant='h6' gutterBottom>
            Vendor Details
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
      <Footer
        onClickPrimary={onClickSave}
        shouldDisablePrimary={false}
        onClickSecondary={() => {}}
      ></Footer>
    </>
  );
};

export default VendorInfo;
