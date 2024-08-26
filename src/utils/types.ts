export interface Discount {
  description: string;
  discountPercent: number;
}

export interface Tax {
  description: string;
  taxPercent: number;
}

export interface LineItem {
  id: string;
  description: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  final_price: number;
  discounts: Discount[];
  taxes: Tax[];
}

export interface Customer {
  customer_id: number;
  name: string;
  address: string;
  contact_number: string;
  email: string;
}

export interface VendorInfo {
  name: string;
  address: string;
  phoneNumber: string;
}

export interface DraftSliceState {
  vendor: VendorInfo;
  customer: Customer | null;
  isExistingCustomer: boolean;
  lineItems: LineItem[];
  total: number;
}

export interface InvoiceRecord {
  id: string;
  customer: string;
  total_amount: number;
  created_date: string;
  updated_date: string;
}

export interface InvoiceListData {
  totalRecordCount: number;
  records: InvoiceRecord[];
}

export interface ApiResponse<T> {
  status: number;
  error?: string;
  data: T;
}

export interface PaginationData {
  startPage: number;
  rowsPerPage: number;
  stage: string;
}

export enum InvoiceStage {
  DRAFT = 'draft',
  PRODUCTION = 'production',
}
