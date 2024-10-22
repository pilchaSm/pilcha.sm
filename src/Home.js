// src/components/Home.js
import React from 'react';
import { Grid, Container } from '@mui/material';
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
  },
  {
    name: 'Producto 2',
    description: 'Descripción del producto 2.',
    price: '1500',
    image: 'https://via.placeholder.com/150',
  },  
];

const Home = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
