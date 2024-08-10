import { Button } from '@mui/material';
import Header from '../Header/Header';
import './Home.scss';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  const onClickCreateInvoice = () => {
    navigate('/create-invoice');
  };

  return (
    <>
      <Header title='Home'></Header>
      <Button variant='contained' className='create-new-invoice' onClick={onClickCreateInvoice}>
        Create new invoice
      </Button>
    </>
  );
}

export default Home;
