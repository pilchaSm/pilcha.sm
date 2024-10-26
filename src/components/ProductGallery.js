import React, { useState, useEffect } from "react";
import { Grid, Container, Button, Box } from "@mui/material";
import ProductCard from "../components/Cart";
import { fetchImagesFromCloudinary } from "../service/service";

const ProductGallery = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const images = await fetchImagesFromCloudinary();
        setProducts(images);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  const displayedProducts = showAll ? products : products.slice(0, 3);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {displayedProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard
              product={{
                name: product.name,
                image: product.image,
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
