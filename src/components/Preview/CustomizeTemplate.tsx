import React, { useState } from 'react';
import { Grid, Box, Typography, TextField, MenuItem } from '@mui/material';
import { useAppDispatch } from '../../store/hooks';
import InvoicePreview from './InvoicePreview';
import Footer, { FooterButton } from '../Common/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { setThemeData } from '../../store/invoiceDraftSlice';

const CustomizeTemplate: React.FC = () => {
  const [headingFontSize, setHeadingFontSize] = useState<number>(16);
  const [headingFontColor, setHeadingFontColor] = useState<string>('#000000');
  const [contentFontSize, setContentFontSize] = useState<number>(14);
  const [contentFontColor, setContentFontColor] = useState<string>('#000000');
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');
  const [tableHeadingBackgroundColor, setTableHeadingBackgroundColor] = useState<string>('#ffffff');
  const [tableBodyBackgroundColor, setTableBodyBackgroundColor] = useState<string>('#ffffff');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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

  const onSaveProceed = () => {
    dispatch(
      setThemeData({
        headingStyles,
        contentStyles,
        backgroundColor,
        tableHeadingBackgroundColor,
        tableBodyBackgroundColor,
      }),
    );
    navigate('/home');
  };

  const getFooterPrimaryProps = (): FooterButton => {
    return {
      text: 'Publish Draft',
      action: onSaveProceed,
      disabled: false,
    };
  };

  const footerPrimaryProps = getFooterPrimaryProps();

  return (
    <>
      <Grid container spacing={2}>
        <Grid container item xs={8} sx={{ height: '100vh', overflowY: 'scroll' }}>
          <InvoicePreview
            headingStyles={headingStyles}
            contentStyles={contentStyles}
            tableHeadingBackgroundColor={tableHeadingBackgroundColor}
            tableBodyBackgroundColor={tableBodyBackgroundColor}
            backgroundColor={backgroundColor}
          ></InvoicePreview>
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
      <Footer primary={footerPrimaryProps} />
    </>
  );
};

export default CustomizeTemplate;
