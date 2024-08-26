import { Button, Paper } from '@mui/material';
import Header from '../Common/Header/Header';
import './Home.scss';
import { useNavigate } from 'react-router-dom';
import InvoiceList from '../InvoiceList/InvoiceList';
import TabsComponent from '../Common/Tabs/TabsComponent';
import AddIcon from '@mui/icons-material/Add';
import { InvoiceStage } from '../../utils/types';

function Home() {
  const navigate = useNavigate();
  const onClickCreateInvoice = () => {
    navigate('/invoice-details');
  };

  return (
    <>
      <Header title='Home'></Header>
      <Button variant='contained' className='create-new-invoice' onClick={onClickCreateInvoice}>
        <AddIcon />
        Create new invoice
      </Button>
      <Paper sx={{ padding: 2 }}>
        <TabsComponent
          labelComponentMappings={[
            { label: 'Invoices', component: <InvoiceList stage={InvoiceStage.PRODUCTION} /> },
            { label: 'Drafts', component: <InvoiceList stage={InvoiceStage.DRAFT} /> },
          ]}
        />
      </Paper>
    </>
  );
}

export default Home;
