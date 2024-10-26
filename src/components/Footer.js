import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Container 
      component="footer" 
      maxWidth={false} 
      sx={{
        bgcolor: '#080000',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        py: 1,
      }}
    >
      <Typography variant="body1" color="white" align="center">
        © 2024 Pilcha SM
      </Typography>
    </Container>
  );
};

export default Footer;
