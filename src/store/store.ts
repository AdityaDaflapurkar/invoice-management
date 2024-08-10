import { configureStore } from '@reduxjs/toolkit';
import customersReducer from './getCustomerSlice';
import invoiceDraftReducer from './invoiceDraftSlice';

export const store = configureStore({
  reducer: {
    customers: customersReducer,
    invoiceDraft: invoiceDraftReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
