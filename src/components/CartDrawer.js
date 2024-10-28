import React from 'react';
import {Drawer,Box,Typography,List,ListItem,ListItemText,IconButton,Button} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';

const CartDrawer = ({ cartItems, open, onClose, removeFromCart }) => {

  const handleCheckout = () => {
    const productDetails = cartItems.map(item => {
      return `*${item.name}* - Precio: $${item.price} - Talle: ${item.selectedSize}`;
    }).join('\n');

    const whatsappMessage = `Hola! Quiero comprar los siguientes productos:\n\n${productDetails}`;
    const whatsappNumber = '+5491124091923'; 
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    window.open(whatsappURL, '_blank'); 
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box role="presentation" sx={{ width: 250 }}>
        <Typography variant="h6" sx={{ padding: 2 }}>
          Carrito de compras
        </Typography>
        <List>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <ListItem key={index} secondaryAction={
                <IconButton edge="end" onClick={() => removeFromCart(index)}>
                  <RemoveIcon />
                </IconButton>
              }>
                <ListItemText 
                  primary={item.name} 
                  secondary={`Precio: $${item.price}`} 
                />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="El carrito está vacío" />
            </ListItem>
          )}
        </List>
        {cartItems.length > 0 && (
          <Box sx={{ padding: 2 }}>
            <Button variant="contained" color="primary" onClick={handleCheckout} fullWidth>
              Finalizar compra
            </Button>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
