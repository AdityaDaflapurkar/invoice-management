import { CUSTOMERS, INVOICE_LIST } from './utils/data';
import { ApiResponse, Customer, InvoiceListData, InvoiceRecord } from './utils/types';

export function getCustomers(customerName: string): Promise<ApiResponse<Customer[]>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data:
          customerName === ''
            ? []
            : CUSTOMERS.filter((customer) => customer.name.includes(customerName)),
      });
    }, 1000);
  });
}

export function getInvoices(
  start: number,
  rowsPerPage: number,
): Promise<ApiResponse<InvoiceListData>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: {
          records: INVOICE_LIST.slice(start * rowsPerPage, rowsPerPage),
          totalRecordCount: INVOICE_LIST.length,
        },
      });
    }, 1000);
  });
}
