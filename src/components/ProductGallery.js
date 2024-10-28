import React, { useState, useEffect } from "react";
import { Grid, Container, Button, Box } from "@mui/material";
import ProductCard from "../components/Cart"; 
import { parseProductInfo } from "../utils/mapperProduc";
const ProductGallery = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://pilcha-sm-backend.vercel.app/api/images");
        const data = await response.json();

        const parsedProducts = data.map(product => parseProductInfo(product?.public_id,product?.url)); 
        setProducts(parsedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard
              product={{
                name: product?.name,
                url: product?.url,
                price: product?.price,
                sizes: product?.sizes,
                category: product?.category,
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
