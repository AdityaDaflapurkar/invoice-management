import { Autocomplete, Box, Grid, Paper, TextField, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCustomers } from '../../store/getCustomerSlice';
import {
  clearCustomerDetails,
  setCustomerDetails,
  setIsExistingCustomer,
} from '../../store/invoiceDraftSlice';

function CustomerDetails() {
  const { customers, loading, selectedCustomer, isExistingCustomer } = useAppSelector((state) => ({
    customers: state.customers.customers,
    loading: state.customers.isLoading,
    selectedCustomer: state.invoiceDraft.customer,
    isExistingCustomer: state.invoiceDraft.isExistingCustomer,
  }));

  const dispatch = useAppDispatch();

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
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Box sx={{ padding: 2 }}>
          <Typography variant='h6' gutterBottom>
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
                value={selectedCustomer?.name || ''}
                sx={{ width: 300 }}
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
                value={selectedCustomer?.contact_number || ''}
                sx={{ width: 300 }}
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
                type='email'
                value={selectedCustomer?.email || ''}
                sx={{ width: 300 }}
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
                multiline
                rows={4}
                value={selectedCustomer?.address || ''}
                sx={{ width: 300 }}
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
      </Paper>
    </>
  );
}

export default CustomerDetails;
