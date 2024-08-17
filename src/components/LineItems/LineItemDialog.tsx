import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Grid,
  FormControl,
  Select,
  MenuItem,
  IconButton,
  InputLabel,
} from '@mui/material';
import { Discount, LineItem, Tax } from '../../utils/types';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

interface LineItemDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (lineItem: LineItem) => void;
  currentItem: LineItem | null;
}

const taxCategories = ['Tax 1', 'Tax 2', 'Tax 3', 'Tax 4', 'Tax 5'];
const discountCategories = ['Seasonal Offer', 'Clearance Sale', 'Bulk Purchase'];

const LineItemDialog: React.FC<LineItemDialogProps> = (props) => {
  const { open, onClose, onSave } = props;

  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);
  const [taxes, setTaxes] = useState<Tax[]>([]);
  const [discounts, setDiscounts] = useState<Discount[]>([]);
  const [availableTaxes, setAvailableTaxes] = useState(taxCategories);
  const [availableDiscounts, setAvailableDiscounts] = useState(discountCategories);
  const [currentDiscount, setCurrentDiscount] = useState<Discount>(null);

  useEffect(() => {
    if (props.currentItem) {
      setDescription(props.currentItem.description);
      setQuantity(props.currentItem.quantity);
      setUnitPrice(props.currentItem.unit_price);
      setTaxes(props.currentItem.taxes);
      setDiscounts(props.currentItem.discounts);
    } else {
      setDescription('');
      setQuantity(0);
      setUnitPrice(0);
      setTaxes([]);
      setDiscounts([]);
    }
  }, [props.currentItem]);
  const id = props.currentItem?.id || 'line_item_' + Date.now();

  const calculateTotals = () => {
    const totalPrice = quantity * unitPrice;
    const totalTaxPercent = taxes.reduce((acc, tax) => acc + tax.taxPercent, 0);
    const totalDiscountPercent = discounts.reduce(
      (acc, discount) => acc + discount.discountPercent,
      0,
    );
    const discountedPrice = totalPrice - (totalDiscountPercent * totalPrice) / 100;
    const finalPrice = discountedPrice + (totalTaxPercent * discountedPrice) / 100;

    return {
      totalPrice,
      finalPrice,
    };
  };

  const handleSave = () => {
    const { totalPrice, finalPrice } = calculateTotals();

    const updatedLineItem: LineItem = {
      id,
      description,
      quantity,
      unit_price: unitPrice,
      total_price: totalPrice,
      final_price: finalPrice,
      taxes,
      discounts,
    };

    onSave(updatedLineItem);
    onClose();
  };

  function handleAddDiscount(): void {
    setDiscounts(
      discounts.concat({
        description: availableDiscounts[0],
        discountPercent: 0,
      }),
    );
  }

  function handleDiscountDescriptionChange(index: number, value: string): void {
    const discountsCopy = JSON.parse(JSON.stringify(discounts));
    discountsCopy[index].description = value;
    setDiscounts(discountsCopy);
  }

  function handleDiscountPercentChange(index: number, value: string): void {
    const discountsCopy = JSON.parse(JSON.stringify(discounts));
    discountsCopy[index].discountPercent = +value;
    setDiscounts(discountsCopy);
  }

  function handleRemoveDiscount(index: number): void {
    setDiscounts(discounts.filter((_, discountIndex) => discountIndex !== index));
  }

  const handleAddTax = () => {
    setTaxes([...taxes, { description: taxCategories[0], taxPercent: 0 }]);
  };

  function handleTaxDescriptionChange(index: number, value: string): void {
    const taxesCopy = JSON.parse(JSON.stringify(taxes));
    taxesCopy[index].description = value;
    setTaxes(taxesCopy);
  }

  function handleTaxPercentChange(index: number, value: string): void {
    const taxesCopy = JSON.parse(JSON.stringify(taxes));
    taxesCopy[index].taxPercent = +value;
    setTaxes(taxesCopy);
  }

  const handleRemoveTax = (index: number) => {
    const updatedTaxes = taxes.filter((_, i) => i !== index);
    setTaxes(updatedTaxes);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Line Item</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          label='Description'
          variant='standard'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          margin='dense'
          label='Quantity'
          type='number'
          variant='standard'
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        />
        <TextField
          margin='dense'
          label='Unit Price ($)'
          type='number'
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
                  value={tax.description}
                  onChange={(e) => handleTaxDescriptionChange(index, e.target.value)}
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
                label='Amount (%)'
                type='number'
                fullWidth
                InputLabelProps={{ shrink: true }}
                variant='standard'
                value={tax.taxPercent}
                onChange={(e) => handleTaxPercentChange(index, e.target.value)}
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
              <FormControl>
                <InputLabel>Discount Type</InputLabel>
                <Select
                  value={discount.description}
                  onChange={(e) => handleDiscountDescriptionChange(index, e.target.value)}
                  variant='standard'
                >
                  {availableDiscounts.map((category) => (
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
                value={discount.discountPercent}
                onChange={(e) => handleDiscountPercentChange(index, e.target.value)}
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
