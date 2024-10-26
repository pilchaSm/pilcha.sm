import React from "react";
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
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: 3, // Sombra para el card
        transition: "transform 0.2s", // Transición suave
        "&:hover": {
          transform: "scale(1.05)", // Efecto hover
        },
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          height: 200,
          objectFit: "cover",
          borderBottom: "1px solid #e0e0e0", // Línea divisoria
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