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
