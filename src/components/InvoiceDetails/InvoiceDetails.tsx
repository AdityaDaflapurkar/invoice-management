import { useNavigate } from 'react-router-dom';
import Footer, { FooterButton } from '../Common/Footer/Footer';
import CustomerDetails from '../CustomerDetails/CustomerDetails';
import VendorDetails from '../VendorDetails/VendorDetails';
import Header from '../Common/Header/Header';
import { Box } from '@mui/material';

const InvoiceDetails: React.FC = () => {
  const navigate = useNavigate();

  const onSaveProceed = () => {
    navigate('/line-items');
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
      <Header title='Invoice Details'></Header>
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          marginBottom: '64px',
          padding: 2,
        }}
      >
        <VendorDetails />
        <CustomerDetails />
      </Box>
      <Footer primary={footerPrimaryProps}></Footer>
    </>
  );
};

export default InvoiceDetails;
