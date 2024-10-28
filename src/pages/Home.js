import React from "react";
import ProductGallery from "../components/ProductGallery";

const Home = ({ onAddToCart }) => {

  return (
    <div>
      <ProductGallery onAddToCart={onAddToCart} />
    </div>
  );
};

export default Home;