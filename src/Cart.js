import React from 'react';
import Button from '@mui/material/Button';

const Cart = ({ cartItems }) => {
  const handleCheckout = () => {
    const phoneNumber = '+5491124091923'; // Número de WhatsApp
    const text = cartItems
      .map((item) => `${item.name} - ${item.price}`)
      .join('\n');
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
      {cartItems.length > 0 && (
        <Button variant="contained" color="primary" onClick={handleCheckout}>
          Enviar a WhatsApp
        </Button>
      )}
    </div>
  );
};

export default Cart;
