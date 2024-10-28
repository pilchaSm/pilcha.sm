import React from "react";
import ProductGallery from "../components/ProductGallery";
import ServiceInfo from "../components/ServiceInfo";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = ({ onAddToCart }) => {
  const navigate = useNavigate();
  const handleViewAllProducts = () => {
    navigate("/productos"); 
  };
  return (
    <div>
      <ServiceInfo />
      <ProductGallery onAddToCart={onAddToCart} limit={3} category="productos" />
      <Box textAlign="center" mt={4}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleViewAllProducts}
        >
          Ver todos los productos
        </Button>
      </Box>
    </div>
  );
};

export default Home;