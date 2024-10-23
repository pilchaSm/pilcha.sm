import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import theme from './theme/theme';
import Navbar from './components/NavBar';
import Home from './components/Home';
//import Zapatillas from './components/Zapatillas'; 
//import Indumentaria from './components/Indumentaria'; 
//import Accesorios from './components/Accesorios'; 
//import Contacto from './components/Contacto'; 
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            minHeight: '100vh',
            bgcolor: 'background.paper',
          }}
        >
          <Container maxWidth="lg" disableGutters>
            <Navbar />
            <Box sx={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/zapatillas" element={<Home />} />
                <Route path="/indumentaria" element={<Home />} />
                <Route path="/accesorios" element={<Home />} />
                <Route path="/contacto" element={<Home />} />
              </Routes>
            </Box>
          </Container>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
