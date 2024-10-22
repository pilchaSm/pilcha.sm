import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import logo from '../assets/logo.png';


const Navbar = () => {
  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar style={{ justifyContent: 'center', position: 'relative' }}>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
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
      </Toolbar>
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
