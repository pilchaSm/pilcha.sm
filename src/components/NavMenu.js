import React from 'react';
import { List, ListItem, ListItemText, Drawer, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavMenu = ({ isMobile, toggleDrawer, drawerOpen }) => {
  const menuItems = [
    { text: 'Inicio', path: '/' },
    { text: 'Zapatillas', path: '/zapatillas' },
    { text: 'Indumentaria', path: '/indumentaria' },
    { text: 'Accesorios', path: '/accesorios' },
    { text: 'Contacto', path: '/contacto' },
  ];

  return (
    <>
      {isMobile ? (
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
      ) : (
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button color="inherit" sx={{ margin: '0 10px' }}>
                {item.text}
              </Button>
            </Link>
          ))}
        </Box>
      )}
    </>
  );
};

export default NavMenu;
