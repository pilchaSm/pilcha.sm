import { parseProductInfo } from "../utils/mapperProduc";

export const fetchProducts = async (category, limit) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_APP_ID}/api/images`);
      const data = await response.json();
  
      const parsedProducts = data.map(product => parseProductInfo(product?.public_id, product?.url));
  
      const filtered = category !== "productos"
        ? parsedProducts.filter(product => product.category === category)
        : parsedProducts;
  
      return limit ? filtered.slice(0, limit) : filtered;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error; 
    }
  };
  