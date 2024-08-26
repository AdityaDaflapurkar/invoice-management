import { CUSTOMERS, DRAFT_LIST, INVOICE_LIST } from './utils/data';
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

interface StageToListType {
  draft: InvoiceRecord[];
  production: InvoiceRecord[];
}

const STAGE_TO_LIST_MAP: StageToListType = {
  draft: DRAFT_LIST,
  production: INVOICE_LIST,
};

function getListByStage(stage: string) {
  return STAGE_TO_LIST_MAP[stage as keyof StageToListType] || [];
}

export function getInvoices(
  start: number,
  rowsPerPage: number,
  stage: string,
): Promise<ApiResponse<InvoiceListData>> {
  return new Promise((resolve) => {
    const invoiceRecordList = getListByStage(stage);
    setTimeout(() => {
      resolve({
        status: 200,
        data: {
          records: invoiceRecordList.slice(start * rowsPerPage, start * rowsPerPage + rowsPerPage),
          totalRecordCount: invoiceRecordList.length,
        },
      });
    }, 1000);
  });
}
