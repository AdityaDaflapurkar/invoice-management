import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import CreateInvoice from '../CustomerDetails/CustomerDetails';
import LineItems from '../LineItems/LineItems';
import Preview from '../Preview/Preview';
import VendorInfo from '../VendorDetails/VendorDetails';

const vendorData = {
  name: 'ABC Supplies Ltd.',
  address: '123 Main St, Springfield, USA',
  phoneNumber: '+1 (555) 123-4567',
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/create-invoice' element={<CreateInvoice />} />
          <Route path='/line-items' element={<LineItems />} />
          <Route path='/preview-save' element={<Preview />} />
          <Route
            path='/vendor-info'
            element={
              <VendorInfo
                name={vendorData.name}
                address={vendorData.address}
                phoneNumber={vendorData.phoneNumber}
              />
            }
          />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
