import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Box, Badge, Typography, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { ShoppingCart, Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavBar = ({ cartItems = [] }) => {
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
    <>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar sx={{ justifyContent: 'center', padding: '10px 0' }}>
          <img src={logo} alt="Logo" style={{ height: '50%', cursor: 'pointer' }} />
        </Toolbar>
      </AppBar>
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
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {!isMobile && (
              <>
                {menuItems.map((item, index) => (
                  <Link key={index} to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button color="inherit" sx={{ margin: '0 10px' }}>
                      {item.text}
                    </Button>
                  </Link>
                ))}
              </>
            )}
          </Box>
          <IconButton color="inherit">
            <Badge badgeContent={cartItems.length} color="secondary" sx={{ marginLeft: '5px' }}>
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
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
    </>
  );
};

export default NavBar;
