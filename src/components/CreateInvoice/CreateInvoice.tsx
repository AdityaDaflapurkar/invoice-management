import { Autocomplete, Button, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCustomers } from '../../store/getCustomerSlice';
import Header from '../Header/Header';
import { setCustomerDetails } from '../../store/invoiceDraftSlice';

function CreateInvoice() {
  const { customers, loading, selectedCustomer } = useAppSelector((state) => ({
    customers: state.customers.customers,
    loading: state.customers.isLoading,
    selectedCustomer: state.invoiceDraft.customer,
  }));
  const dispatch = useAppDispatch();

  const onSearchCustomer = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(fetchCustomers(e.target.value));
  };

  const onSelectCustomer = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCustomerDetails(customers.find((o) => o.name === e.target.value)));
  };

  const onInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(fetchCustomers(e.target.value));
  };

  const onInputContactNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(fetchCustomers(e.target.value));
  };

  const onInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(fetchCustomers(e.target.value));
  };

  const onInputAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(fetchCustomers(e.target.value));
  };
  return (
    <>
      <Header title='Enter Customer Details'></Header>
      <Autocomplete
        disablePortal
        id='combo-box-demo'
        options={customers.map((e) => e.name)}
        sx={{ width: 300 }}
        loading={loading}
        onSelect={onSelectCustomer}
        renderInput={(params) => (
          <TextField {...params} label='Search Customer' onInput={onSearchCustomer} />
        )}
      />
      <TextField label='Customer Name' onInput={onInputName} value={selectedCustomer?.name} />
      <TextField
        label='Contact Number'
        onInput={onInputContactNumber}
        value={selectedCustomer?.contact_number}
      />
      <TextField label='Email Address' onInput={onInputEmail} value={selectedCustomer?.email} />
      <TextField
        label='Billing Address'
        onInput={onInputAddress}
        value={selectedCustomer?.address}
      />
      <></>
      <Button>Save and Proceed</Button>
    </>
  );
}

export default CreateInvoice;
