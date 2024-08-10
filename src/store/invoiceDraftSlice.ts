import { createSlice } from '@reduxjs/toolkit';
import { Customer } from '../utils';

interface DraftSliceState {
  customer: Customer | null;
}

const initialState: DraftSliceState = {
  customer: null,
};

const invoiceDraftSlice = createSlice({
  name: 'invoiceDraft',
  initialState,
  reducers: {
    setCustomerDetails: (state, action) => {
      state.customer = action.payload;
    },
  },
});

export const { setCustomerDetails } = invoiceDraftSlice.actions;
export default invoiceDraftSlice.reducer;
