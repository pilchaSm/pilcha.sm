import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Box, Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import logo from '../assets/logo.png';


const Navbar = ({ cartItems = [] }) => {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    if (cartItems && cartItems.length > 0) {
      const message = cartItems.map(item => `${item.name} - $${item.price}`).join('\n');
      const whatsappUrl = `https://wa.me/+5491124091923?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      setShowCart(true);
    }
  };

  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar style={{ flexDirection: 'column', alignItems: 'center', padding: '10px 0' }}>
        <Box style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '10px' }}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: '50%', cursor: 'pointer' }}
          />
{          /*<Box style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
            <IconButton color="inherit" size="small">
              <ShoppingCart />
              <Typography variant="subtitle2" color="textPrimary" style={{ marginLeft: 5 }}>
                (0) $0
              </Typography>
            </IconButton>
            <Button color="inherit" size="small">Iniciar sesion</Button>
          </Box>*/}
        </Box>
        <Box style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Zapatillas</Button>
          <Button color="inherit">Indumentaria</Button>
          <Button color="inherit">Accesorios</Button>
          <Button color="inherit">Contacto</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
