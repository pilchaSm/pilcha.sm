import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import theme from './theme/theme';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import ServiceInfo from './components/ServiceInfo'; 

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh' 
      }}>
        <Navbar cartItems={cartItems} />
        <ServiceInfo /> 
        <Box sx={{ flexGrow: 1 }}>
          <Home />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
