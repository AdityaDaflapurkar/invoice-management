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
    <Grid
      container
      justifyContent='center'
      sx={{ height: '100vh', overflowY: 'scroll', background: 'grey' }}
    >
      <Grid container item xs={8}>
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
    </Grid>
  );
};

export default CustomizeTemplate;
