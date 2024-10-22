// src/components/ProductCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary">
          ${product.price}
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        color="secondary"
        href={`https://wa.me/549123456789?text=Estoy interesado en el producto: ${product.name}`}
      >
        Comprar vía WhatsApp
      </Button>
    </Card>
  );
};

export default ProductCard;
