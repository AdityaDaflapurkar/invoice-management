import { createSlice } from '@reduxjs/toolkit';
import { Discount, DraftSliceState, LineItem } from '../utils/types';
const initialState: DraftSliceState = {
  vendor: {
    name: 'ABC Supplies Ltd.',
    address: '123 Main St, Springfield, USA',
    phoneNumber: '+1 (555) 123-4567',
  },
  customer: null,
  isExistingCustomer: false,
  lineItems: [
    {
      id: 'line_item_1723842358',
      description: 'Product A',
      quantity: 10,
      unit_price: 15.0,
      total_price: 150.0,
      final_price: 130.0,
      discounts: [{ description: 'Seasonal Offer', discountPercent: 10 }],
      taxes: [
        { description: 'Tax 1', taxPercent: 5 },
        { description: 'Tax 2', taxPercent: 5 },
      ],
    },
    {
      id: 'line_item_1723842370',
      description: 'Product B',
      quantity: 5,
      unit_price: 20.0,
      total_price: 100.0,
      final_price: 95.0,
      discounts: [{ description: 'Clearance Sale', discountPercent: 5 }],
      taxes: [{ description: 'Tax 1', taxPercent: 12 }],
    },
  ],
  themeData: {
    headingStyles: {
      fontSize: 12,
      fontColor: 'red',
    },
    contentStyles: {
      fontSize: 12,
      fontColor: 'red',
    },
    backgroundColor: '',
    tableHeadingBackgroundColor: '',
    tableBodyBackgroundColor: '',
  },
  total: 0,
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
      state.isExistingCustomer = action.payload;
    },
    clearCustomerDetails: (state) => {
      state.customer = null;
      state.isExistingCustomer = false;
    },
    addLineItem: (state, action) => {
      state.lineItems.push({ ...action.payload, id: `line_item_${Date.now()}` });
    },
    removeLineItem: (state, action) => {
      const index = state.lineItems.findIndex((item: LineItem) => action.payload.id === item.id);
      state.lineItems.splice(index, 1);
    },
    updateLineItem: (state, action) => {
      const index = action.payload.index;
      state.lineItems[index] = action.payload.data;
    },
    addTax: (state, action) => {
      const lineItemIndex: number = state.lineItems.findIndex(
        (item: LineItem) => item.id === action.payload.lineItemId,
      );
      const lineItem: LineItem = state.lineItems[lineItemIndex];
      lineItem.taxes.push(action.payload);
    },
    removeTax: (state, action) => {
      const lineItemIndex: number = state.lineItems.findIndex(
        (item: LineItem) => item.id === action.payload.lineItemId,
      );
      const lineItem: LineItem = state.lineItems[lineItemIndex];
      const taxIndex = lineItem.taxes.findIndex((tax: Tax) => tax.id === action.payload.taxId);
      lineItem.taxes.splice(taxIndex, 1);
    },
    addDiscount: (state, action) => {
      const lineItemIndex: number = state.lineItems.findIndex(
        (item: LineItem) => item.id === action.payload.lineItemId,
      );
      const lineItem: LineItem = state.lineItems[lineItemIndex];
      lineItem.discounts.push(action.payload);
    },
    removeDiscount: (state, action) => {
      const lineItemIndex: number = state.lineItems.findIndex(
        (item: LineItem) => item.id === action.payload.lineItemId,
      );
      const lineItem: LineItem = state.lineItems[lineItemIndex];
      const discountIndex = lineItem.discounts.findIndex(
        (discount: Discount) => discount.id === action.payload.taxId,
      );
      lineItem.taxes.splice(discountIndex, 1);
    },
    setThemeData: (state, action) => {
      state.themeData = action.payload;
    },
  },
});

export const {
  setCustomerDetails,
  clearCustomerDetails,
  setIsExistingCustomer,
  addLineItem,
  updateLineItem,
  removeLineItem,
  setThemeData,
} = invoiceDraftSlice.actions;
export default invoiceDraftSlice.reducer;
