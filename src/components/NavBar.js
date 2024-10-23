import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Box, Badge, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // Importa Link
import logo from '../assets/logo.png';

const Navbar = ({ cartItems = [] }) => {
  const [showCart, setShowCart] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false); // Estado para el Drawer

  const handleCartClick = () => {
    if (cartItems && cartItems.length > 0) {
      const message = cartItems.map(item => `${item.name} - $${item.price}`).join('\n');
      const whatsappUrl = `https://wa.me/+5491124091923?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      setShowCart(true);
    }
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Inicio', path: '/' },
    { text: 'Zapatillas', path: '/zapatillas' },
    { text: 'Indumentaria', path: '/indumentaria' },
    { text: 'Accesorios', path: '/accesorios' },
    { text: 'Contacto', path: '/contacto' },
  ];

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
          <Button color="inherit" variant="outlined" size="small">
            Iniciar sesión
          </Button>

          {/* Icono de menú para pantallas pequeñas */}
          <IconButton color="inherit" onClick={toggleDrawer(true)} sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Typography variant="h6">Menu</Typography>
          </IconButton>
        </Box>
      </Toolbar>

      {/* Botones de navegación para pantallas grandes */}
      <Toolbar style={{ justifyContent: 'center', display: { xs: 'none', sm: 'flex' } }}>
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path} style={{ textDecoration: 'none' }}>
            <Button color="inherit">{item.text}</Button>
          </Link>
        ))}
      </Toolbar>

      {/* Drawer para la navegación responsive */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={toggleDrawer(false)}>
              <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={item.text} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
