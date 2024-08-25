import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from '@mui/material';
import { LineItem } from '../../utils/types';

interface PreviewTableProps {
  items: LineItem[];
  headingStyles: any;
  contentStyles: any;
  tableHeadingBackgroundColor: string;
  tableBodyBackgroundColor: string;
}

const PreviewTable: React.FC<PreviewTableProps> = ({
  items,
  headingStyles,
  contentStyles,
  tableHeadingBackgroundColor,
  tableBodyBackgroundColor,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: tableHeadingBackgroundColor }}>
          <TableRow>
            <TableCell sx={headingStyles}>Description</TableCell>
            <TableCell align='right' sx={headingStyles}>
              Quantity
            </TableCell>
            <TableCell align='right' sx={headingStyles}>
              Price
            </TableCell>
            <TableCell align='right' sx={headingStyles}>
              Discounts
            </TableCell>
            <TableCell align='right' sx={headingStyles}>
              Taxes
            </TableCell>
            <TableCell align='right' sx={headingStyles}>
              Discounted Price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ backgroundColor: tableBodyBackgroundColor }}>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell sx={contentStyles}>{item.description}</TableCell>
              <TableCell align='right' sx={contentStyles}>
                {item.quantity}
              </TableCell>
              <TableCell align='right' sx={contentStyles}>
                {item.total_price.toFixed(2)}
              </TableCell>
              <TableCell align='right'>
                {item.discounts.map((discount) => (
                  <Box key={discount.description}>
                    <Box sx={headingStyles}>{discount.description}</Box>
                    <Box component='span' sx={contentStyles}>
                      ({discount.discountPercent}%)
                    </Box>
                  </Box>
                ))}
              </TableCell>
              <TableCell align='right'>
                {item.taxes.map((tax) => (
                  <Box key={tax.description}>
                    <Box sx={headingStyles}>{tax.description}</Box>
                    <Box component='span' sx={contentStyles}>
                      ({tax.taxPercent}%)
                    </Box>
                  </Box>
                ))}
              </TableCell>
              <TableCell align='right' sx={contentStyles}>
                {item.final_price.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={5} align='right'>
              <strong>Total Amount Payable</strong>
            </TableCell>
            <TableCell align='right'>
              <strong>{200}</strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PreviewTable;
