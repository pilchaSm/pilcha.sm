// src/components/ProductCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        sx={{
          height: 0,
          paddingTop: '56.25%', // 16:9 aspect ratio
          objectFit: 'cover'
        }}
        image={product.image}
        alt={product.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="text.primary" sx={{ mt: 2 }}>
          ${product.price}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2 }}>
        <Button 
          fullWidth
          variant="contained" 
          color="primary" 
          startIcon={<AddShoppingCartIcon />}
          onClick={() => onAddToCart(product)}
        >
          Agregar al carrito
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
