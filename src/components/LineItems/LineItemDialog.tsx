import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  IconButton,
  Grid,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

interface Tax {
  type: string;
  amount: number;
}

interface Discount {
  type: string;
  amount: number;
}

interface LineItem {
  description: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  taxes: Tax[];
  discounts: Discount[];
  discounted_price: number;
}

interface LineItemDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (lineItem: LineItem) => void;
}

const taxCategories = ['CGST', 'SGST', 'IGST', 'CESS'];
const discountCategories = ['Seasonal Offer', 'Clearance Sale', 'Bulk Purchase'];

const LineItemDialog: React.FC<LineItemDialogProps> = ({ open, onClose, onSave }) => {
  const [description, setDescription] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [unitPrice, setUnitPrice] = useState<number>(0);
  const [taxes, setTaxes] = useState<Tax[]>([{ type: taxCategories[0], amount: 0 }]);
  const [discounts, setDiscounts] = useState<Discount[]>([
    { type: discountCategories[0], amount: 0 },
  ]);

  const calculateTotals = () => {
    const totalPrice = quantity * unitPrice;
    const totalTaxAmount = taxes.reduce((acc, tax) => acc + tax.amount, 0);
    const totalDiscountAmount = discounts.reduce((acc, discount) => acc + discount.amount, 0);
    const discountedPrice = totalPrice + totalTaxAmount - totalDiscountAmount;

    return {
      totalPrice,
      discountedPrice,
    };
  };

  const handleSave = () => {
    const { totalPrice, discountedPrice } = calculateTotals();

    const newLineItem: LineItem = {
      description,
      quantity,
      unit_price: unitPrice,
      total_price: totalPrice,
      taxes,
      discounts,
      discounted_price: discountedPrice,
    };

    onSave(newLineItem);
    onClose();
  };

  const handleAddTax = () => {
    setTaxes([...taxes, { type: taxCategories[0], amount: 0 }]);
  };

  const handleRemoveTax = (index: number) => {
    const updatedTaxes = taxes.filter((_, i) => i !== index);
    setTaxes(updatedTaxes);
  };

  const handleTaxChange = (index: number, field: 'type' | 'amount', value: any) => {
    const updatedTaxes: Tax[] = [...taxes];
    //updatedTaxes[index][field] = field === 'amount' ? parseFloat(value) : value;
    setTaxes(updatedTaxes);
  };

  const handleAddDiscount = () => {
    setDiscounts([...discounts, { type: discountCategories[0], amount: 0 }]);
  };

  const handleRemoveDiscount = (index: number) => {
    const updatedDiscounts = discounts.filter((_, i) => i !== index);
    setDiscounts(updatedDiscounts);
  };

  const handleDiscountChange = (index: number, field: 'type' | 'amount', value: any) => {
    const updatedDiscounts = [...discounts];
    //updatedDiscounts[index][field] = field === 'amount' ? parseFloat(value) : value;
    setDiscounts(updatedDiscounts);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Line Item</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          label='Description'
          fullWidth
          variant='standard'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          margin='dense'
          label='Quantity'
          type='number'
          fullWidth
          variant='standard'
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        />
        <TextField
          margin='dense'
          label='Unit Price ($)'
          type='number'
          fullWidth
          variant='standard'
          value={unitPrice}
          onChange={(e) => setUnitPrice(parseFloat(e.target.value))}
        />

        <Typography variant='h6' sx={{ marginTop: 4, marginBottom: 2 }}>
          Taxes
        </Typography>
        {taxes.map((tax, index) => (
          <Grid container spacing={2} key={index} alignItems='center'>
            <Grid item xs={6}>
              <FormControl fullWidth margin='dense'>
                <InputLabel>Tax Type</InputLabel>
                <Select
                  value={tax.type}
                  onChange={(e) => handleTaxChange(index, 'type', e.target.value)}
                  variant='standard'
                >
                  {taxCategories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <TextField
                margin='dense'
                label='Amount ($)'
                type='number'
                fullWidth
                variant='standard'
                value={tax.amount}
                onChange={(e) => handleTaxChange(index, 'amount', e.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <IconButton onClick={() => handleRemoveTax(index)} color='error'>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
        <Button
          variant='outlined'
          startIcon={<AddIcon />}
          onClick={handleAddTax}
          sx={{ marginTop: 2 }}
        >
          Add Tax
        </Button>

        <Typography variant='h6' sx={{ marginTop: 4, marginBottom: 2 }}>
          Discount
        </Typography>
        {discounts.map((discount, index) => (
          <Grid container spacing={2} key={index} alignItems='center'>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Discount Type</InputLabel>
                <Select
                  value={discount.type}
                  onChange={(e) => handleDiscountChange(index, 'type', e.target.value)}
                  variant='standard'
                >
                  {discountCategories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <TextField
                margin='dense'
                label='Amount ($)'
                type='number'
                fullWidth
                variant='standard'
                value={discount.amount}
                onChange={(e) => handleDiscountChange(index, 'amount', e.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <IconButton onClick={() => handleRemoveDiscount(index)} color='error'>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
        <Button
          variant='outlined'
          startIcon={<AddIcon />}
          onClick={handleAddDiscount}
          sx={{ marginTop: 2 }}
        >
          Add Discount
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant='contained' color='primary'>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LineItemDialog;
