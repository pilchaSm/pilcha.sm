import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductCard = ({ product, onAddToCart }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: 3,
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={imgError ? `../image/logo.png` : product.url}
        alt={product.name}
        onError={() => setImgError(true)}
        sx={{
          height: 200,
          objectFit: "cover",
          borderBottom: "1px solid #e0e0e0",
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        {product.sizes && product.sizes.length > 0 && (
          <Typography variant="body2" color="text.secondary">
            Talles: {product.sizes.join(", ")}
          </Typography>
        )}
        <Typography variant="h6" color="text.primary" sx={{ mt: 2 }}>
          ${product.price}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          startIcon={<AddShoppingCartIcon />}
          onClick={() => onAddToCart(product)}
        >
          Agregar al carrito
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
