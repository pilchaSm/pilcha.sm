import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const products = [
  { id: 1, name: 'Producto 1', price: '$100' },
  { id: 2, name: 'Producto 2', price: '$150' },
  { id: 3, name: 'Producto 3', price: '$200' },
];

const ProductList = ({ onAddToCart }) => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardContent>
              <Typography variant="h5">{product.name}</Typography>
              <Typography>{product.price}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => onAddToCart(product)}>
                Agregar al carrito
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
