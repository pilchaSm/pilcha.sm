import React from "react";
import ProductGallery from "../components/ProductGallery";

const Product = ({ onAddToCart, category }) => {

  return (
    <div>
      <ProductGallery onAddToCart={onAddToCart} category={category} />
    </div>
  );
};

export default Product;