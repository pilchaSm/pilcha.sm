import React, { useState } from 'react';
import NavBar from './NavBar';
import ProductList from './ProductoList';
import Cart from './Cart';
import Container from '@mui/material/Container';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <NavBar />
      <Container>
        <ProductList onAddToCart={handleAddToCart} />
        <Cart cartItems={cartItems} />
      </Container>
    </div>
  );
}

export default App;
