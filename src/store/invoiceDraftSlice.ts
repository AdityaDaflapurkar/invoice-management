import { createSlice } from '@reduxjs/toolkit';
import { Customer } from '../utils';

interface DraftSliceState {
  customer: Customer | null;
  isExistingCustomer: boolean;
}

const initialState: DraftSliceState = {
  customer: null,
  isExistingCustomer: false,
};

const invoiceDraftSlice = createSlice({
  name: 'invoiceDraft',
  initialState,
  reducers: {
    setCustomerDetails: (state, action) => {
      if (state.isExistingCustomer) {
        state.customer = action.payload;
      } else {
        state.customer = { ...state.customer, ...action.payload };
      }
    },
    setIsExistingCustomer: (state, action) => {
      console.log('setIsExistingCustomer!!!' + action.payload);
      state.isExistingCustomer = action.payload;
    },
    clearCustomerDetails: (state) => {
      state.customer = null;
      state.isExistingCustomer = false;
      console.log('clearCustomerDetails!!!');
    },
  },
});

export const { setCustomerDetails, clearCustomerDetails, setIsExistingCustomer } =
  invoiceDraftSlice.actions;
export default invoiceDraftSlice.reducer;
