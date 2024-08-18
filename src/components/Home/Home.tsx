import { Button } from '@mui/material';
import Header from '../Common/Header/Header';
import './Home.scss';
import { useNavigate } from 'react-router-dom';
import InvoiceList from '../InvoiceList/InvoiceList';
import TabsComponent from '../Common/Tabs/TabsComponent';
function Home() {
  const navigate = useNavigate();
  const onClickCreateInvoice = () => {
    navigate('/invoice-details');
  };

  return (
    <>
      <Header title='Home'></Header>
      <Button variant='contained' className='create-new-invoice' onClick={onClickCreateInvoice}>
        Create new invoice
      </Button>
      <TabsComponent
        labelComponentMappings={[
          { label: 'Invoices', component: <InvoiceList /> },
          { label: 'Drafts', component: <InvoiceList /> },
        ]}
      />
    </>
  );
}

export default Home;
