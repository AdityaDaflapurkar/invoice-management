import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Header from '../Common/Header/Header';
import Footer, { FooterButton } from '../Common/Footer/Footer';
import { useNavigate } from 'react-router-dom';

interface VendorInfoProps {
  name: string;
  address: string;
  phoneNumber: string;
}

const VendorInfo: React.FC<VendorInfoProps> = ({ name, address, phoneNumber }) => {
  const navigate = useNavigate();
  const onSaveProceed = () => {
    navigate('/create-invoice');
  };

  const getFooterPrimaryProps = (): FooterButton => {
    return {
      text: 'Save and Proceed',
      action: onSaveProceed,
      disabled: false,
    };
  };

  const footerPrimaryProps = getFooterPrimaryProps();

  return (
    <>
      <Header title='Home'></Header>
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
      <Footer primary={footerPrimaryProps}></Footer>
    </>
  );
};

export default VendorInfo;
