// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ 
      bgcolor: '#080000', 
      p: 1, 
      mt: 'auto'  // Esto empuja el footer hacia abajo
    }}>
      <Typography variant="body1" color="white" align="center">
        © 2024 Pilcha SM
      </Typography>
    </Box>
  );
};

export default Footer;
