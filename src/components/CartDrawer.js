import React from 'react';
import { Drawer, Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const CartDrawer = ({ cartItems, open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box role="presentation" onClick={onClose} onKeyDown={onClose} sx={{ width: 250 }}>
        <Typography variant="h6" sx={{ padding: 2 }}>
          Productos en el Carrito
        </Typography>
        <List>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item.name} secondary={`Precio: ${item.price}`} />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="El carrito está vacío" />
            </ListItem>
          )}
        </List>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
