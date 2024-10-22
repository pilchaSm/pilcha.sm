import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
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
        minHeight: '100vh',
        bgcolor: 'background.paper',
      }}>
        <Container maxWidth="lg" disableGutters>
          <Navbar />
          <ServiceInfo />
          <Box sx={{ flexGrow: 1 }}>
            <Home />
          </Box>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
