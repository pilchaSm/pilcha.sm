import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Box, Badge, Typography, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { ShoppingCart, Menu as MenuIcon } from '@mui/icons-material';
import logo from '../assets/logo.png';


const Navbar = ({ cartItems = [] }) => {
  const [showCart, setShowCart] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCartClick = () => {
    if (cartItems && cartItems.length > 0) {
      const message = cartItems.map(item => `${item.name} - $${item.price}`).join('\n');
      const whatsappUrl = `https://wa.me/+5491124091923?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      setShowCart(true);
    }
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar style={{ justifyContent: 'space-between', padding: '10px 0' }}>
        <Box style={{ flex: 1 }} />
        
        <Box style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: '50%', cursor: 'pointer' }}
          />
        </Box>
        
        <Box style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}>
          <IconButton color="inherit" onClick={handleCartClick} style={{ marginRight: '10px' }}>
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          {!isMobile && (
            <Button color="inherit" variant="outlined" size="small">
              Iniciar sesión
            </Button>
          )}
        </Box>
      </Toolbar>
      
      {isMobile ? (
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Inicio</MenuItem>
            <MenuItem onClick={handleMenuClose}>Zapatillas</MenuItem>
            <MenuItem onClick={handleMenuClose}>Indumentaria</MenuItem>
            <MenuItem onClick={handleMenuClose}>Accesorios</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contacto</MenuItem>
            <MenuItem onClick={handleMenuClose}>Iniciar sesión</MenuItem>
          </Menu>
        </Toolbar>
      ) : (
        <Toolbar style={{ justifyContent: 'center' }}>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Zapatillas</Button>
          <Button color="inherit">Indumentaria</Button>
          <Button color="inherit">Accesorios</Button>
          <Button color="inherit">Contacto</Button>
        </Toolbar>
      )}
    </AppBar>
  );
};

export default Navbar;
