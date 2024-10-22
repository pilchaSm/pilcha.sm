// src/components/Footer.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#080000', 
        width: '100%',
        mt: 'auto'  // Esto empuja el footer hacia abajo
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ p: 1 }}>
          <Typography variant="body1" color="white" align="center">
            © 2024 Pilcha SM
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
