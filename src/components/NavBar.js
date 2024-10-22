import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Box, Badge, Typography } from '@mui/material';
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
      <Toolbar style={{ justifyContent: 'space-between', padding: '10px 0' }}>
        {/* Espacio vacío a la izquierda para equilibrar */}
        <Box style={{ flex: 1 }} />
        
        {/* Logo en el centro */}
        <Box style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: '50%', cursor: 'pointer' }}
          />
        </Box>
        
        {/* Carrito e inicio de sesión a la derecha */}
        <Box style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}>
          <IconButton color="inherit" onClick={handleCartClick} style={{ marginRight: '10px' }}>
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <Button color="inherit" variant="outlined" size="small">
            Iniciar sesión
          </Button>
        </Box>
      </Toolbar>
      
      {/* Botones de navegación */}
      <Toolbar style={{ justifyContent: 'center' }}>
        <Button color="inherit">Inicio</Button>
        <Button color="inherit">Zapatillas</Button>
        <Button color="inherit">Indumentaria</Button>
        <Button color="inherit">Accesorios</Button>
        <Button color="inherit">Contacto</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
