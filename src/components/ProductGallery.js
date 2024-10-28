import React, { useState } from "react";
import { Grid, Container, Button, Box } from "@mui/material";
import ProductCard from "../components/Cart"; // Asegúrate de que esta sea la ruta correcta
import productData from "../api/images.json"; // Asegúrate de que esta sea la ruta correcta

const ProductGallery = () => {
  const [showAll, setShowAll] = useState(false);

  // const displayedProducts = showAll ? productData : productData.slice(0, 3);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {productData.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard
              product={{
                name: product.name, // Toma el nombre de la imagen
                url: product.url, // Asegúrate de que esta sea la URL correcta
                price: product.id, // Asegúrate de que esta propiedad esté en el JSON
                sizes: product.talles, // Asegúrate de que esta propiedad esté en el JSON
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
