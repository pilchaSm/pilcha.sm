import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import theme from './theme/theme';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import ServiceInfo from './components/ServiceInfo'; 
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh' 
      }}>
        <Navbar />
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
