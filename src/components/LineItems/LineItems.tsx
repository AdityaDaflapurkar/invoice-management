// import React, { useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   Collapse,
//   Box,
//   Typography,
//   Grid,
// } from '@mui/material';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import DeleteIcon from '@mui/icons-material/Delete';

// interface Discount {
//   description: string;
//   discountPercent: number;
//   discountRate: number;
// }

// interface Tax {
//   description: string;
//   taxPercent: number;
//   taxRate: number;
// }

// interface LineItem {
//   description: string;
//   quantity: number;
//   unit_price: number;
//   total_price: number;
//   final_price: number;
//   discounts: Discount[];
//   taxes: Tax[];
// }

// const LineItems: React.FC = () => {
//   const [lineItems, setLineItems] = useState<LineItem[]>([
//     {
//       description: 'Product A',
//       quantity: 10,
//       unit_price: 15.0,
//       total_price: 150.0,
//       final_price: 130.0,
//       discounts: [{ description: 'Seasonal Discount', discountPercent: 10, discountRate: 15 }],
//       taxes: [
//         { description: 'CGST', taxPercent: 5, taxRate: 7.5 },
//         { description: 'SGST', taxPercent: 5, taxRate: 7.5 },
//       ],
//     },
//     {
//       description: 'Product B',
//       quantity: 5,
//       unit_price: 20.0,
//       total_price: 100.0,
//       final_price: 95.0,
//       discounts: [{ description: 'Festive Offer', discountPercent: 5, discountRate: 5 }],
//       taxes: [{ description: 'GST', taxPercent: 12, taxRate: 12 }],
//     },
//   ]);

//   const [openRows, setOpenRows] = useState<number[]>([]);

//   const handleRowToggle = (index: number) => {
//     setOpenRows((prevOpenRows) =>
//       prevOpenRows.includes(index)
//         ? prevOpenRows.filter((i) => i !== index)
//         : [...prevOpenRows, index],
//     );
//   };

//   const handleDelete = (index: number) => {
//     setLineItems((prevLineItems) => prevLineItems.filter((_, i) => i !== index));
//   };

//   return (
//     <TableContainer component={Paper}>
//       <Table aria-label='collapsible table'>
//         <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell>Description</TableCell>
//             <TableCell>Quantity</TableCell>
//             <TableCell>Unit Price ($)</TableCell>
//             <TableCell>Total Price ($)</TableCell>
//             <TableCell>Final Price ($)</TableCell>
//             <TableCell>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {lineItems.map((item, index) => (
//             <React.Fragment key={index}>
//               <TableRow>
//                 <TableCell>
//                   <IconButton
//                     aria-label='expand row'
//                     size='small'
//                     onClick={() => handleRowToggle(index)}
//                   >
//                     {openRows.includes(index) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//                   </IconButton>
//                 </TableCell>
//                 <TableCell>{item.description}</TableCell>
//                 <TableCell>{item.quantity}</TableCell>
//                 <TableCell>{item.unit_price.toFixed(2)}</TableCell>
//                 <TableCell>{item.total_price.toFixed(2)}</TableCell>
//                 <TableCell>{item.final_price.toFixed(2)}</TableCell>
//                 <TableCell>
//                   <IconButton onClick={() => handleDelete(index)} color='error'>
//                     <DeleteIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
//                   <Collapse in={openRows.includes(index)} timeout='auto' unmountOnExit>
//                     <Box margin={1}>
//                       <Grid container spacing={2}>
//                         {/* Discount Table */}
//                         <Grid item xs={12} md={6}>
//                           <Typography variant='h6' gutterBottom component='div'>
//                             Discounts
//                           </Typography>
//                           <Table size='small' aria-label='discounts'>
//                             <TableHead>
//                               <TableRow>
//                                 <TableCell>Description</TableCell>
//                                 <TableCell>Discount %</TableCell>
//                                 <TableCell>Discount Rate ($)</TableCell>
//                               </TableRow>
//                             </TableHead>
//                             <TableBody>
//                               {item.discounts.map((discount, discountIndex) => (
//                                 <TableRow key={discountIndex}>
//                                   <TableCell>{discount.description}</TableCell>
//                                   <TableCell>{discount.discountPercent.toFixed(2)}%</TableCell>
//                                   <TableCell>{discount.discountRate.toFixed(2)}</TableCell>
//                                 </TableRow>
//                               ))}
//                             </TableBody>
//                           </Table>
//                         </Grid>
//                         {/* Tax Table */}
//                         <Grid item xs={12} md={6}>
//                           <Typography variant='h6' gutterBottom component='div'>
//                             Taxes
//                           </Typography>
//                           <Table size='small' aria-label='taxes'>
//                             <TableHead>
//                               <TableRow>
//                                 <TableCell>Description</TableCell>
//                                 <TableCell>Tax %</TableCell>
//                                 <TableCell>Tax Rate ($)</TableCell>
//                               </TableRow>
//                             </TableHead>
//                             <TableBody>
//                               {item.taxes.map((tax, taxIndex) => (
//                                 <TableRow key={taxIndex}>
//                                   <TableCell>{tax.description}</TableCell>
//                                   <TableCell>{tax.taxPercent.toFixed(2)}%</TableCell>
//                                   <TableCell>{tax.taxRate.toFixed(2)}</TableCell>
//                                 </TableRow>
//                               ))}
//                             </TableBody>
//                           </Table>
//                         </Grid>
//                       </Grid>
//                     </Box>
//                   </Collapse>
//                 </TableCell>
//               </TableRow>
//             </React.Fragment>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default LineItems;

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Collapse,
  Box,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

interface Discount {
  description: string;
  discountPercent: number;
  discountRate: number;
}

interface Tax {
  description: string;
  taxPercent: number;
  taxRate: number;
}

interface LineItem {
  description: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  final_price: number;
  discounts: Discount[];
  taxes: Tax[];
}

const initialLineItems: LineItem[] = [
  {
    description: 'Product A',
    quantity: 10,
    unit_price: 15.0,
    total_price: 150.0,
    final_price: 130.0,
    discounts: [{ description: 'Seasonal Discount', discountPercent: 10, discountRate: 15 }],
    taxes: [
      { description: 'CGST', taxPercent: 5, taxRate: 7.5 },
      { description: 'SGST', taxPercent: 5, taxRate: 7.5 },
    ],
  },
  {
    description: 'Product B',
    quantity: 5,
    unit_price: 20.0,
    total_price: 100.0,
    final_price: 95.0,
    discounts: [{ description: 'Festive Offer', discountPercent: 5, discountRate: 5 }],
    taxes: [{ description: 'GST', taxPercent: 12, taxRate: 12 }],
  },
];

const LineItems: React.FC = () => {
  const [lineItems, setLineItems] = useState<LineItem[]>(initialLineItems);
  const [openRows, setOpenRows] = useState<number[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newItem, setNewItem] = useState<Partial<LineItem>>({
    description: '',
    quantity: 0,
    unit_price: 0,
    total_price: 0,
    final_price: 0,
    discounts: [],
    taxes: [],
  });

  const handleRowToggle = (index: number) => {
    setOpenRows((prevOpenRows) =>
      prevOpenRows.includes(index)
        ? prevOpenRows.filter((i) => i !== index)
        : [...prevOpenRows, index],
    );
  };

  const handleDelete = (index: number) => {
    setLineItems((prevLineItems) => prevLineItems.filter((_, i) => i !== index));
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (newItem.description) {
      setLineItems((prevLineItems) => [...prevLineItems, newItem as LineItem]);
      handleDialogClose();
    }
  };

  return (
    <>
      <Button
        variant='contained'
        color='primary'
        startIcon={<AddIcon />}
        onClick={handleDialogOpen}
        sx={{ margin: 2 }}
      >
        Add New Item
      </Button>
      <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Description</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Unit Price ($)</TableCell>
              <TableCell>Total Price ($)</TableCell>
              <TableCell>Final Price ($)</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lineItems.map((item, index) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell>
                    <IconButton
                      aria-label='expand row'
                      size='small'
                      onClick={() => handleRowToggle(index)}
                    >
                      {openRows.includes(index) ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </IconButton>
                  </TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{(+item.unit_price)?.toFixed(2)}</TableCell>
                  <TableCell>{(+item.total_price)?.toFixed(2)}</TableCell>
                  <TableCell>{(+item.final_price)?.toFixed(2)}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDelete(index)} color='error'>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                    <Collapse in={openRows.includes(index)} timeout='auto' unmountOnExit>
                      <Box margin={1}>
                        <Grid container spacing={2}>
                          {/* Discount Table */}
                          <Grid item xs={12} md={6}>
                            <Typography variant='h6' gutterBottom component='div'>
                              Discounts
                            </Typography>
                            <Table size='small' aria-label='discounts'>
                              <TableHead>
                                <TableRow>
                                  <TableCell>Description</TableCell>
                                  <TableCell>Discount %</TableCell>
                                  <TableCell>Discount Rate ($)</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {item.discounts.map((discount, discountIndex) => (
                                  <TableRow key={discountIndex}>
                                    <TableCell>{discount.description}</TableCell>
                                    <TableCell>{discount.discountPercent.toFixed(2)}%</TableCell>
                                    <TableCell>{discount.discountRate.toFixed(2)}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </Grid>
                          {/* Tax Table */}
                          <Grid item xs={12} md={6}>
                            <Typography variant='h6' gutterBottom component='div'>
                              Taxes
                            </Typography>
                            <Table size='small' aria-label='taxes'>
                              <TableHead>
                                <TableRow>
                                  <TableCell>Description</TableCell>
                                  <TableCell>Tax %</TableCell>
                                  <TableCell>Tax Rate ($)</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {item.taxes.map((tax, taxIndex) => (
                                  <TableRow key={taxIndex}>
                                    <TableCell>{tax.description}</TableCell>
                                    <TableCell>{tax.taxPercent.toFixed(2)}%</TableCell>
                                    <TableCell>{tax.taxRate.toFixed(2)}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </Grid>
                        </Grid>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Add New Line Item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            name='description'
            label='Description'
            type='text'
            fullWidth
            variant='standard'
            value={newItem.description || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin='dense'
            name='quantity'
            label='Quantity'
            type='number'
            fullWidth
            variant='standard'
            value={newItem.quantity || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin='dense'
            name='unit_price'
            label='Unit Price ($)'
            type='number'
            fullWidth
            variant='standard'
            value={newItem.unit_price || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin='dense'
            name='total_price'
            label='Total Price ($)'
            type='number'
            fullWidth
            variant='standard'
            value={newItem.total_price || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin='dense'
            name='final_price'
            label='Final Price ($)'
            type='number'
            fullWidth
            variant='standard'
            value={newItem.final_price || ''}
            onChange={handleInputChange}
          />
          <Typography variant='h6' gutterBottom component='div'>
            Discounts
          </Typography>
          {/* Add UI for entering discounts */}
          {/* For simplicity, just one discount input */}
          <TextField
            margin='dense'
            name='discount_description'
            label='Discount Description'
            type='text'
            fullWidth
            variant='standard'
            value={(newItem.discounts || [{}])[0]?.description || ''}
            onChange={(e) =>
              setNewItem((prevItem) => ({
                ...prevItem,
                discounts: [
                  {
                    ...((prevItem.discounts || [{}])[0] || {}),
                    description: e.target.value,
                  },
                ],
              }))
            }
          />
          <TextField
            margin='dense'
            name='discount_percent'
            label='Discount %'
            type='number'
            fullWidth
            variant='standard'
            value={(newItem.discounts || [{}])[0]?.discountPercent || ''}
            onChange={(e) =>
              setNewItem((prevItem) => ({
                ...prevItem,
                discounts: [
                  {
                    ...((prevItem.discounts || [{}])[0] || {}),
                    discountPercent: parseFloat(e.target.value),
                  },
                ],
              }))
            }
          />
          <TextField
            margin='dense'
            name='discount_rate'
            label='Discount Rate ($)'
            type='number'
            fullWidth
            variant='standard'
            value={(newItem.discounts || [{}])[0]?.discountRate || ''}
            onChange={(e) =>
              setNewItem((prevItem) => ({
                ...prevItem,
                discounts: [
                  {
                    ...((prevItem.discounts || [{}])[0] || {}),
                    discountRate: parseFloat(e.target.value),
                  },
                ],
              }))
            }
          />
          <Typography variant='h6' gutterBottom component='div'>
            Taxes
          </Typography>
          {/* Add UI for entering taxes */}
          {/* For simplicity, just one tax input */}
          <TextField
            margin='dense'
            name='tax_description'
            label='Tax Description'
            type='text'
            fullWidth
            variant='standard'
            value={(newItem.taxes || [{}])[0]?.description || ''}
            onChange={(e) =>
              setNewItem((prevItem) => ({
                ...prevItem,
                taxes: [
                  {
                    ...((prevItem.taxes || [{}])[0] || {}),
                    description: e.target.value,
                  },
                ],
              }))
            }
          />
          <TextField
            margin='dense'
            name='tax_percent'
            label='Tax %'
            type='number'
            fullWidth
            variant='standard'
            value={(newItem.taxes || [{}])[0]?.taxPercent || ''}
            onChange={(e) =>
              setNewItem((prevItem) => ({
                ...prevItem,
                taxes: [
                  {
                    ...((prevItem.taxes || [{}])[0] || {}),
                    taxPercent: parseFloat(e.target.value),
                  },
                ],
              }))
            }
          />
          <TextField
            margin='dense'
            name='tax_rate'
            label='Tax Rate ($)'
            type='number'
            fullWidth
            variant='standard'
            value={(newItem.taxes || [{}])[0]?.taxRate || ''}
            onChange={(e) =>
              setNewItem((prevItem) => ({
                ...prevItem,
                taxes: [
                  {
                    ...((prevItem.taxes || [{}])[0] || {}),
                    taxRate: parseFloat(e.target.value),
                  },
                ],
              }))
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleSave} color='primary'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LineItems;
