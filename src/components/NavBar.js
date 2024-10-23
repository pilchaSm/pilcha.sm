import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Box, Badge, Typography, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { ShoppingCart, Menu as MenuIcon, Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = ({ cartItems = [] }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
      <Toolbar sx={{ justifyContent: 'space-between', padding: '10px 0' }}>
        {isMobile ? (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ visibility: 'hidden' }}>
            <Typography variant="h6">INICIO</Typography>
          </Box>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
          <img src={logo} alt="Logo" style={{ height: '80%', width: 'auto', cursor: 'pointer' }} /> {/* Ajusta el tamaño aquí */}
        </Box>
      </Toolbar>
      {!isMobile && (
        <Toolbar sx={{ justifyContent: 'center', borderBottom: '1px solid #ccc' }}>
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button color="inherit" sx={{ borderBottom: item.text === 'INICIO' ? '2px solid #000' : 'none', margin: '0 10px' }}>
                {item.text}
                {item.text === 'CARRITO' && (
                  <Badge badgeContent={cartItems.length} color="secondary" sx={{ marginLeft: '5px' }}>
                    <ShoppingCart fontSize="small" />
                  </Badge>
                )}
              </Button>
            </Link>
          ))}
        </Toolbar>
      )}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={toggleDrawer(false)}>
              <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
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
