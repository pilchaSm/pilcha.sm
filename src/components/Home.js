import React, { useState } from 'react';
import { Grid, Container, Button, Box } from '@mui/material';
import ProductCard from './Cart';

const products = [
  {
    name: 'Producto 1',
    description: 'Descripción del producto 1.',
    price: '1000',
    image: 'https://via.placeholder.com/150', // imagen de ejemplo
  },
  {
    name: 'Producto 2',
    description: 'Descripción del producto 2.',
    price: '1500',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Producto 2',
    description: 'Descripción del producto 2.',
    price: '1500',
    image: 'https://via.placeholder.com/150',
  }
];

const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll ? products : products.slice(0, 3);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {displayedProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        {!showAll && (
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => setShowAll(true)}
            fullWidth
            sx={{ maxWidth: { xs: '100%', sm: '50%', md: '30%' } }}
          >
            Ver todos los productos
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default Home;
