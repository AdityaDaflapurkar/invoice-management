import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCustomers } from '../utils';
import { Customer } from '../utils/types';

const fetchCustomers = createAsyncThunk('customers', async (customerName: string) => {
  const response = await getCustomers(customerName);
  return response.data;
});

interface CustomerSliceState {
  isLoading: boolean;
  customers: Customer[];
  error: string;
}

const initialState: CustomerSliceState = {
  isLoading: false,
  customers: [],
  error: '',
};

const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCustomers.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.customers = action.payload;
    });
    builder.addCase(fetchCustomers.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchCustomers.rejected, (state, action) => {
      state.error = action.error.message || 'Could not fetch customer details';
      state.isLoading = false;
    });
  },
});

export { fetchCustomers };
export default customerSlice.reducer;
