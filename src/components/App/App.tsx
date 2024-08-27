import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import CustomerDetails from '../CustomerDetails/CustomerDetails';
import LineItems from '../LineItems/LineItems';
import InvoiceDetails from '../InvoiceDetails/InvoiceDetails';
import CustomizeTemplate from '../Preview/CustomizeTemplate';
import InvoicePreview from '../Preview/InvoicePreview';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/create-invoice' element={<CustomerDetails />} />
          <Route path='/line-items' element={<LineItems />} />
          <Route path='/customize-template' element={<CustomizeTemplate />} />
          <Route
            path='/invoice-preview'
            element={
              <InvoicePreview
                headingStyles={undefined}
                contentStyles={undefined}
                backgroundColor={''}
                tableHeadingBackgroundColor={''}
                tableBodyBackgroundColor={''}
              />
            }
          />
          <Route path='/invoice-details' element={<InvoiceDetails />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
