import { createSlice } from '@reduxjs/toolkit';
import { Customer } from '../utils';

interface Discount {
  description: string;
  discountPercent: number;
  discountRate: number;
}

interface Tax {
  description: string;
  taxPercent: number;
  taxRate: number;
}

interface LineItem {
  description: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  final_price: number;
  discounts: Discount[];
  taxes: Tax[];
}

interface DraftSliceState {
  customer: Customer | null;
  isExistingCustomer: boolean;
  lineItems: LineItem[];
}

const initialState: DraftSliceState = {
  customer: null,
  isExistingCustomer: false,
  lineItems: [],
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
    addLineItem: (state, action) => {
      state.lineItems.push(action.payload);
    },
    removeLineItem: (state, action) => {
      const index = state.lineItems.findIndex((item: any) => action.payload.id === item.id);
      state.lineItems.splice(index, 1);
    },
    updateLineItem: (state, action) => {
      const index = state.lineItems.findIndex((item: any) => action.payload.id === item.id);
      state.lineItems[index] = action.payload;
    },
  },
});

export const { setCustomerDetails, clearCustomerDetails, setIsExistingCustomer } =
  invoiceDraftSlice.actions;
export default invoiceDraftSlice.reducer;
