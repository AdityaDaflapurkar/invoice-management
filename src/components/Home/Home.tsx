import { Button } from '@mui/material';
import Header from '../Common/Header/Header';
import './Home.scss';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  const onClickCreateInvoice = () => {
    navigate('/vendor-info');
  };

  return (
    <>
      <Header title='Home'></Header>
      <Button variant='contained' className='create-new-invoice' onClick={onClickCreateInvoice}>
        Create new invoice
      </Button>
      <Button variant='contained' className='create-new-invoice' onClick={onClickCreateInvoice}>
        Create existing draft
      </Button>
      <></>
    </>
  );
}

export default Home;
