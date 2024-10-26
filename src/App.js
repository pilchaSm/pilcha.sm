import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import {  Container } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import theme from './theme/theme';
import NavBar from './components/NavBar';
import Home from './pages/Home';
//import Zapatillas from './components/Zapatillas'; 
//import Indumentaria from './components/Indumentaria'; 
//import Accesorios from './components/Accesorios'; 
//import Contacto from './components/Contacto'; 
import Footer from './components/Footer';

const App = () => {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router basename="/">
            <Container>
              <NavBar />
            </Container>
            <Container style={{ padding: "30px" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/zapatillas" element={<Home />} />
                <Route path="/indumentaria" element={<Home />} />
                <Route path="/accesorios" element={<Home />} />
                <Route path="/contacto" element={<Home />} />
              </Routes>
            </Container>
            <Container>
              <Footer />
            </Container>
          </Router>
      </ThemeProvider>
  );
}

export default App;
