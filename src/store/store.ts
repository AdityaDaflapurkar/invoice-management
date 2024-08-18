import { configureStore } from '@reduxjs/toolkit';
import customersReducer from './getCustomerSlice';
import invoiceDraftReducer from './invoiceDraftSlice';
import invoiceListReducer from './invoiceListSlice';

export const store = configureStore({
  reducer: {
    customers: customersReducer,
    invoiceDraft: invoiceDraftReducer,
    invoiceList: invoiceListReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
