import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge } from '@mui/material';
import { ShoppingCart, Menu as MenuIcon } from '@mui/icons-material';
import { useMediaQuery, useTheme } from '@mui/material';
import NavMenu from './NavMenu';
import CartDrawer from './CartDrawer';
import logo from '../image/logo.png';

const NavBar = ({ cartItems = [], removeFromCart }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const toggleCartDrawer = (open) => () => {
    setCartDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar sx={{ justifyContent: 'center', padding: '10px 0' }}>
          <img src={logo} alt="Logo" style={{ height: '50%', cursor: 'pointer' }} />
        </Toolbar>
      </AppBar>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between', padding: '10px 0' }}>
          {isMobile && (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <NavMenu isMobile={isMobile} toggleDrawer={toggleDrawer} />
          <IconButton color="inherit" onClick={toggleCartDrawer(true)}>
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <CartDrawer 
        cartItems={cartItems} 
        open={cartDrawerOpen} 
        onClose={toggleCartDrawer(false)} 
        removeFromCart={removeFromCart} 
      />
    </>
  );
};

export default NavBar;
