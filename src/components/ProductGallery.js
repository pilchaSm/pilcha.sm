import React, { useState, useEffect } from "react";
import { Grid, Container } from "@mui/material";
import ProductCard from "../components/Cart"; 
import { parseProductInfo } from "../utils/mapperProduc";

const ProductGallery = ({onAddToCart, limit, category}) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    onAddToCart(product);
    setCart((prevCart) => [...prevCart, product]);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://pilcha-sm-backend.vercel.app/api/images");
        const data = await response.json();

        const parsedProducts = data.map(product => parseProductInfo(product?.public_id, product?.url));
      
        const filtered = category !== "productos"
          ? parsedProducts.filter(product => product.category === category)
          : parsedProducts;
  
        const limitedProducts = limit ? filtered.slice(0, limit) : filtered;
  
        setProducts(limitedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
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
