import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { LineItem } from '../../utils/types';

interface BillTableProps {
  items: LineItem[];
}

const BillTable: React.FC<BillTableProps> = ({ items }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Description</strong>
            </TableCell>
            <TableCell align='right'>
              <strong>Quantity</strong>
            </TableCell>
            <TableCell align='right'>
              <strong>Price</strong>
            </TableCell>
            <TableCell align='right'>
              <strong>Discounts</strong>
            </TableCell>
            <TableCell align='right'>
              <strong>Taxes</strong>
            </TableCell>
            <TableCell align='right'>
              <strong>Discounted Price</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.description}</TableCell>
              <TableCell align='right'>{item.quantity}</TableCell>
              <TableCell align='right'>{item.total_price.toFixed(2)}</TableCell>
              <TableCell align='right'>
                {item.discounts.map((discount) => (
                  <div key={discount.description}>
                    <strong>{discount.description}</strong>({discount.discountPercent}%)
                  </div>
                ))}
              </TableCell>
              <TableCell align='right'>
                {item.taxes.map((tax) => (
                  <div key={tax.description}>
                    <strong>{tax.description}</strong>({tax.taxPercent}%)
                  </div>
                ))}
              </TableCell>
              <TableCell align='right'>{item.final_price.toFixed(2)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={3} align='right'>
              <strong>Total Amount Payable</strong>
            </TableCell>
            <TableCell align='right'>
              <strong>{130}</strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BillTable;
