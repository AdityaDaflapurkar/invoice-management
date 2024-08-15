import { Autocomplete, Box, Grid, TextField, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCustomers } from '../../store/getCustomerSlice';
import Header from '../Header/Header';
import {
  clearCustomerDetails,
  setCustomerDetails,
  setIsExistingCustomer,
} from '../../store/invoiceDraftSlice';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';

function CreateInvoice() {
  const { customers, loading, selectedCustomer, isExistingCustomer } = useAppSelector((state) => ({
    customers: state.customers.customers,
    loading: state.customers.isLoading,
    selectedCustomer: state.invoiceDraft.customer,
    isExistingCustomer: state.invoiceDraft.isExistingCustomer,
  }));

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  console.log(isExistingCustomer + 'sel!!');
  console.log(JSON.stringify(selectedCustomer) + 'abc');
  const onSearchCustomer = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(fetchCustomers(e.target.value));
  };

  const onSelectCustomer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedCustomer = customers.find((o) => o.name === e.target.value);
    if (selectedCustomer) {
      dispatch(setCustomerDetails(selectedCustomer));
      console.log('onSelectCustomer' + JSON.stringify(selectedCustomer));
      dispatch(setIsExistingCustomer(true));
    }
  };

  const shouldDisablePrimary =
    !selectedCustomer?.name ||
    !selectedCustomer?.email ||
    !selectedCustomer?.address ||
    !selectedCustomer?.contact_number;

  const onSaveProceed = () => {
    navigate('/line-items');
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSearchInputChange = (e: any) => {
    if (e.target.value === undefined) {
      console.log('onClearCustomerDetails');
      dispatch(clearCustomerDetails());
      dispatch(setIsExistingCustomer(false));
    }
  };

  return (
    <>
      <Header title='Enter Customer Details'></Header>
      <Box
        component='form'
        //onSubmit={handleSubmit}
        sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}
      >
        <Typography variant='h5' gutterBottom>
          Customer Information
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Autocomplete
              disablePortal
              id='combo-box-demo'
              options={customers.map((e) => e.name)}
              sx={{ width: 300 }}
              loading={loading}
              onSelect={onSelectCustomer}
              onChange={onSearchInputChange}
              renderInput={(params) => (
                <TextField {...params} label='Search Customer' onInput={onSearchCustomer} />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Customer Name'
              variant='outlined'
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={selectedCustomer?.name || ''}
              onChange={(e) =>
                dispatch(
                  setCustomerDetails({
                    name: e.target.value,
                  }),
                )
              }
              disabled={isExistingCustomer}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Contact Number'
              variant='outlined'
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={selectedCustomer?.contact_number || ''}
              onChange={(e) =>
                dispatch(
                  setCustomerDetails({
                    contact_number: e.target.value,
                  }),
                )
              }
              disabled={isExistingCustomer}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Email Address'
              variant='outlined'
              InputLabelProps={{ shrink: true }}
              fullWidth
              type='email'
              value={selectedCustomer?.email || ''}
              onChange={(e) =>
                dispatch(
                  setCustomerDetails({
                    email: e.target.value,
                  }),
                )
              }
              disabled={isExistingCustomer}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Billing Address'
              variant='outlined'
              InputLabelProps={{ shrink: true }}
              fullWidth
              multiline
              rows={4}
              value={selectedCustomer?.address || ''}
              onChange={(e) =>
                dispatch(
                  setCustomerDetails({
                    address: e.target.value,
                  }),
                )
              }
              disabled={isExistingCustomer}
              required
            />
          </Grid>
        </Grid>
      </Box>
      <Footer
        onClickPrimary={onSaveProceed}
        shouldDisablePrimary={shouldDisablePrimary}
        onClickSecondary={() => {}}
      ></Footer>
    </>
  );
}

export default CreateInvoice;
