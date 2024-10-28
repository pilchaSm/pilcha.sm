import React, { useState, useEffect } from "react";
import { Grid, Container, Button, Box } from "@mui/material";
import ProductCard from "../components/Cart"; 

const ProductGallery = () => {
  const [productData, setProductData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://pilcha-sm-backend.vercel.app/api/images');
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []); 

  if (loading) {
    return <div>Cargando...</div>; 
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {productData.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard
              product={{
                name: product.public_id.split('-')[0], 
                url: product.url,
              }}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        {!showAll && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowAll(true)}
            fullWidth
            sx={{ maxWidth: { xs: "100%", sm: "50%", md: "30%" } }}
          >
            Ver todos los productos
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default ProductGallery;