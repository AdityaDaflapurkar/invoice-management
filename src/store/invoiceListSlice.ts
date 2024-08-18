import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getInvoices } from '../utils';
import { PaginationData } from '../utils/types';

const fetchInvoices = createAsyncThunk('invoices', async (paginationData: PaginationData) => {
  const { startPage, rowsPerPage } = paginationData;
  const response = await getInvoices(startPage, rowsPerPage);
  return response.data;
});

interface InvoiceRecord {
  id: string;
  customer: string;
  total_amount: number;
  created_date: string;
  updated_date: string;
}

interface InvoiceListSliceState {
  records: InvoiceRecord[];
  error: string;
  isLoading: boolean;
  totalRecordCount: number;
}

const initialState: InvoiceListSliceState = {
  records: [],
  error: '',
  isLoading: false,
  totalRecordCount: 0,
};

const invoiceListSlice = createSlice({
  name: 'invoiceList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchInvoices.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.records = action.payload.records;
      state.totalRecordCount = action.payload.totalRecordCount;
    });
    builder.addCase(fetchInvoices.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchInvoices.rejected, (state, action) => {
      state.error = action.error.message || 'Could not fetch invoice details';
      state.isLoading = false;
      state.records = [];
      state.totalRecordCount = 0;
    });
  },
});

export { fetchInvoices };
export default invoiceListSlice.reducer;
