import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import CreateInvoice from '../CreateInvoice/CreateInvoice';
import LineItems from '../LineItems/LineItems';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/create-invoice' element={<CreateInvoice />} />
          <Route path='/add-line-items' element={<LineItems />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
