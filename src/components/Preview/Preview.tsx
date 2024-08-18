import React, { useState } from 'react';
import { Grid, Paper, Box, Typography, TextField, MenuItem } from '@mui/material';
import BillTable from './BillTable';
import { useAppSelector } from '../../store/hooks';

const billItems = [
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
  {
    description: 'Item 1',
    quantity: 2,
    price: 50,
    discountedPrice: 45,
  },
  {
    description: 'Item 2',
    quantity: 1,
    price: 100,
    discountedPrice: 90,
  },
  {
    description: 'Item 3',
    quantity: 3,
    price: 30,
    discountedPrice: 25,
  },
];

const InvoicePreview: React.FC = () => {
  // State for heading styles
  const [headingFontSize, setHeadingFontSize] = useState<number>(24);
  const [headingFontColor, setHeadingFontColor] = useState<string>('#000000');
  const [headingBgColor, setHeadingBgColor] = useState<string>('#ffffff');

  // State for content styles
  const [contentFontSize, setContentFontSize] = useState<number>(16);
  const [contentFontColor, setContentFontColor] = useState<string>('#000000');
  const [contentBgColor, setContentBgColor] = useState<string>('#ffffff');

  const invoiceDraft = useAppSelector((state) => state.invoiceDraft);

  // Handlers for heading
  const handleHeadingFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeadingFontSize(Number(event.target.value));
  };

  const handleHeadingFontColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeadingFontColor(event.target.value);
  };

  const handleHeadingBgColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeadingBgColor(event.target.value);
  };

  // Handlers for content
  const handleContentFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContentFontSize(Number(event.target.value));
  };

  const handleContentFontColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContentFontColor(event.target.value);
  };

  const handleContentBgColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContentBgColor(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid container item xs={8} sx={{ height: '100vh', overflowY: 'scroll' }}>
        <Paper elevation={3} sx={{ padding: 2, margin: 2, width: '100%' }}>
          <Box sx={{ padding: 2 }}>
            <Typography variant='h5' gutterBottom>
              INVOICE
            </Typography>
            <Typography variant='body1' gutterBottom>
              {invoiceDraft.vendor.name}
            </Typography>
            <Typography variant='body1' gutterBottom>
              {invoiceDraft.vendor.address}
            </Typography>
            <Typography variant='body1' gutterBottom>
              {invoiceDraft.vendor.phoneNumber}
            </Typography>
            <Typography variant='body1' gutterBottom>
              Bill No: 12780
            </Typography>
            <BillTable items={invoiceDraft.lineItems} />
            <Box sx={{ marginTop: 20 }}>
              <Typography variant='h6' gutterBottom>
                Customer Details
              </Typography>
              <Typography variant='h6' gutterBottom>
                {invoiceDraft.customer?.name}
              </Typography>
              <Typography variant='body1' gutterBottom>
                {invoiceDraft.customer?.address}
              </Typography>
              <Typography variant='body1' gutterBottom>
                {invoiceDraft.customer?.contact_number}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
      <Grid container item xs={4}>
        <Box sx={{ padding: 2 }}>
          {/* Heading Controls */}
          <Typography variant='h6' gutterBottom>
            Heading Controls
          </Typography>
          <TextField
            select
            label='Font Size'
            value={headingFontSize}
            onChange={handleHeadingFontSizeChange}
            sx={{ marginBottom: 2, width: 200 }}
          >
            {[16, 18, 20, 24, 28, 32, 36].map((size) => (
              <MenuItem key={size} value={size}>
                {size}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label='Font Color'
            type='color'
            value={headingFontColor}
            onChange={handleHeadingFontColorChange}
            sx={{ marginBottom: 2, width: 200 }}
          />
          <TextField
            label='Background Color'
            type='color'
            value={headingBgColor}
            onChange={handleHeadingBgColorChange}
            sx={{ marginBottom: 2, width: 200 }}
          />

          {/* Content Controls */}
          <Typography variant='h6' gutterBottom>
            Content Controls
          </Typography>

          <TextField
            select
            label='Font Size'
            value={contentFontSize}
            onChange={handleContentFontSizeChange}
            sx={{ marginBottom: 2, width: 200 }}
          >
            {[12, 14, 16, 18, 20, 24, 28].map((size) => (
              <MenuItem key={size} value={size}>
                {size}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label='Font Color'
            type='color'
            value={contentFontColor}
            onChange={handleContentFontColorChange}
            sx={{ marginBottom: 2, width: 200 }}
          />
          <TextField
            label='Background Color'
            type='color'
            value={contentBgColor}
            onChange={handleContentBgColorChange}
            sx={{ marginBottom: 2, width: 200 }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default InvoicePreview;
