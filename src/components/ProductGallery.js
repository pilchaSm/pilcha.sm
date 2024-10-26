import React, { useState } from "react";
import { Grid, Container, Button, Box } from "@mui/material";
import ProductCard from "../components/Cart";
import productData from "../api/images.json";

const ProductGallery = () => {
  const [showAll, setShowAll] = useState(false);

  // Productos a mostrar
  const displayedProducts = showAll ? productData : productData.slice(0, 3);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {displayedProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard
              product={{
                name: product.nombre, 
                image: product.imageUrl, 
                price: product.precio,  
                sizes: product.talles, 
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