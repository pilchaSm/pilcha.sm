// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', p: 2, mt: 4 }}>
      <Typography variant="body1" color="white" align="center">
        © 2024 Pilcha SM
      </Typography>
    </Box>
  );
};

export default Footer;
