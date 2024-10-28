import React, { useState, useEffect } from "react";
import { Grid, Container } from "@mui/material";
import ProductCard from "../components/Cart"; 
import { fetchProducts } from "../service/service";
const ProductGallery = ({onAddToCart, limit, category}) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    onAddToCart(product);
    setCart((prevCart) => [...prevCart, product]);
  };

  useEffect(() => { 
    const getProducts = async () => {
      try {
        const limitedProducts = await fetchProducts(category, limit);
        setProducts(limitedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, [category, limit]);


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
              onAddToCart={handleAddToCart}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductGallery;
