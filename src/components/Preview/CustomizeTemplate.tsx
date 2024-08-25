import React, { useState } from 'react';
import { Grid, Paper, Box, Typography, TextField, MenuItem } from '@mui/material';
import BillTable from './PreviewTable';
import { useAppSelector } from '../../store/hooks';

const CustomizeTemplate: React.FC = () => {
  const [headingFontSize, setHeadingFontSize] = useState<number>(16);
  const [headingFontColor, setHeadingFontColor] = useState<string>('#000000');
  const [contentFontSize, setContentFontSize] = useState<number>(14);
  const [contentFontColor, setContentFontColor] = useState<string>('#000000');
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');
  const [tableHeadingBackgroundColor, setTableHeadingBackgroundColor] = useState<string>('#ffffff');
  const [tableBodyBackgroundColor, setTableBodyBackgroundColor] = useState<string>('#ffffff');

  const invoiceDraft = useAppSelector((state) => state.invoiceDraft);

  const handleHeadingFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeadingFontSize(Number(event.target.value));
  };

  const handleHeadingFontColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeadingFontColor(event.target.value);
  };

  const handleContentFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContentFontSize(Number(event.target.value));
  };

  const handleContentFontColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContentFontColor(event.target.value);
  };

  const handleBackgroundColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(event.target.value);
  };

  const handleTableHeadingBackgroundColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTableHeadingBackgroundColor(event.target.value);
  };

  const handleTableBodyBackgroundColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTableBodyBackgroundColor(event.target.value);
  };

  const getHeadingStyles = () => {
    return {
      color: headingFontColor,
      fontSize: headingFontSize,
    };
  };

  const getContentStyles = () => {
    return {
      color: contentFontColor,
      fontSize: contentFontSize,
    };
  };

  const headingStyles = getHeadingStyles();
  const contentStyles = getContentStyles();

  return (
    <Grid container spacing={2}>
      <Grid container item xs={8} sx={{ height: '100vh', overflowY: 'scroll' }}>
        <Paper
          elevation={3}
          sx={{ padding: 2, margin: 2, width: '100%', backgroundColor: backgroundColor }}
        >
          <Box sx={{ padding: 2 }}>
            <Typography variant='h5' gutterBottom sx={headingStyles}>
              Invoice
            </Typography>
            <Typography variant='body1' gutterBottom sx={contentStyles}>
              {invoiceDraft.vendor.name}
            </Typography>
            <Typography variant='body1' gutterBottom sx={contentStyles}>
              {invoiceDraft.vendor.address}
            </Typography>
            <Typography variant='body1' gutterBottom sx={contentStyles}>
              {invoiceDraft.vendor.phoneNumber}
            </Typography>
            <Typography variant='body1' gutterBottom sx={headingStyles}>
              Invoice Number
            </Typography>
            <BillTable
              items={invoiceDraft.lineItems}
              headingStyles={headingStyles}
              contentStyles={contentStyles}
              tableHeadingBackgroundColor={tableHeadingBackgroundColor}
              tableBodyBackgroundColor={tableBodyBackgroundColor}
            />
            <Box sx={{ marginTop: 8 }}>
              <Typography variant='h6' gutterBottom sx={headingStyles}>
                Customer Details
              </Typography>
              <Typography variant='h6' gutterBottom sx={contentStyles}>
                {invoiceDraft.customer?.name}
              </Typography>
              <Typography variant='body1' gutterBottom sx={contentStyles}>
                {invoiceDraft.customer?.address}
              </Typography>
              <Typography variant='body1' gutterBottom sx={contentStyles}>
                {invoiceDraft.customer?.contact_number}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
      <Grid container item xs={4}>
        <Box sx={{ padding: 2 }}>
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
          <Typography variant='h6' gutterBottom>
            Layout Controls
          </Typography>
          <TextField
            label='Background Color'
            type='color'
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
            sx={{ marginBottom: 2, width: 200 }}
          />
          <TextField
            label='Table Heading Background Color'
            type='color'
            value={tableHeadingBackgroundColor}
            onChange={handleTableHeadingBackgroundColorChange}
            sx={{ marginBottom: 2, width: 200 }}
          />
          <TextField
            label='Table Body Background Color'
            type='color'
            value={tableBodyBackgroundColor}
            onChange={handleTableBodyBackgroundColorChange}
            sx={{ marginBottom: 2, width: 200 }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default CustomizeTemplate;
