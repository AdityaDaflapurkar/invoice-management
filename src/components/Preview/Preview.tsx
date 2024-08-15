import React, { useState } from 'react';
import { Grid, Paper, Box, Typography, TextField, MenuItem } from '@mui/material';

const FontControlComponent: React.FC = () => {
  // State for heading styles
  const [headingFontSize, setHeadingFontSize] = useState<number>(24);
  const [headingFontColor, setHeadingFontColor] = useState<string>('#000000');
  const [headingBgColor, setHeadingBgColor] = useState<string>('#ffffff');

  // State for content styles
  const [contentFontSize, setContentFontSize] = useState<number>(16);
  const [contentFontColor, setContentFontColor] = useState<string>('#000000');
  const [contentBgColor, setContentBgColor] = useState<string>('#ffffff');

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
      {/* Left Column */}
      <Grid item xs={6}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          {/* Heading */}
          <Typography
            variant='h5'
            sx={{
              fontSize: `${headingFontSize}px`,
              color: headingFontColor,
              backgroundColor: headingBgColor,
              padding: 1,
            }}
          >
            Sample Heading
          </Typography>
          {/* Content */}
          <Typography
            variant='body1'
            sx={{
              fontSize: `${contentFontSize}px`,
              color: contentFontColor,
              backgroundColor: contentBgColor,
              padding: 1,
              marginTop: 2,
            }}
          >
            This is a sample content that will change its font size, color, and background color
            based on the controls on the right.
          </Typography>
        </Paper>
      </Grid>

      {/* Right Column */}
      <Grid item xs={6}>
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
            fullWidth
            sx={{ marginBottom: 2 }}
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
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label='Background Color'
            type='color'
            value={headingBgColor}
            onChange={handleHeadingBgColorChange}
            fullWidth
            sx={{ marginBottom: 2 }}
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
            fullWidth
            sx={{ marginBottom: 2 }}
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
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label='Background Color'
            type='color'
            value={contentBgColor}
            onChange={handleContentBgColorChange}
            fullWidth
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default FontControlComponent;
