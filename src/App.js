import React,{useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import Contact from "./pages/Contacto";
const App = () => {

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/pilcha.sm">
        <Container>
        <NavBar cartItems={cartItems} removeFromCart={removeFromCart} />
        </Container>
        <Container style={{ padding: "30px", marginBottom: "50px" }}>
          <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="/productos" element={<Product onAddToCart={handleAddToCart} category="productos"/>} />
          <Route path="/zapatillas" element={<Product onAddToCart={handleAddToCart} category="zapatillas"/>} />
          <Route path="/indumentaria" element={<Product onAddToCart={handleAddToCart} category="indumentaria"/>} />
          <Route path="/accesorios" element={<Product onAddToCart={handleAddToCart} category="accesorios"/>} />
          <Route path="/contacto" element={<Contact/>} />
          </Routes>
        </Container>
        <Container>
          <Footer />
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
