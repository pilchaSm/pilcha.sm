import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import Navbar from './NavBar';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
