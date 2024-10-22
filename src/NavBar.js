import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import {  ShoppingCart } from '@mui/icons-material';
import logo from './assets/logo.png';


const Navbar = () => {
  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar style={{ justifyContent: 'center', position: 'relative' }}>
        <img
          src={logo}
          alt="Logo"
          style={{ height: '50%', cursor: 'pointer' }}
        />
        <Box style={{ right: 0, display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit">
            <ShoppingCart />
            <Typography variant="subtitle1" color="textPrimary" style={{ marginLeft: 5 }}>
              (0) $0
            </Typography>
          </IconButton>
          <Button color="inherit">Iniciar sesión</Button>
        </Box>
      </Toolbar>
      <Toolbar style={{ justifyContent: 'center' }}>
        <Button color="inherit">Inicio</Button>
        <Button color="inherit">Productos</Button>
        <Button color="inherit">Contacto</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
