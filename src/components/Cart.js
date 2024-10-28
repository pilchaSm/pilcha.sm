import React, { useState } from "react";
import { Card,CardContent,CardMedia,Typography,Button,Box,Chip,Snackbar} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MuiAlert from "@mui/material/Alert";

const ProductCard = ({ product, onAddToCart }) => {
  const [imgError, setImgError] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChipClick = (size) => {
    setSelectedSize(size === selectedSize ? '' : size);
  };

  const handleAddToCart = () => {
    onAddToCart({ ...product, selectedSize });
    setOpenSnackbar(true); 
    setSelectedSize(''); 
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  return (
    <>
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
            <Box sx={{ mb: 2 }}>
              {product.sizes.map((size) => (
                <Chip
                  key={size}
                  label={size}
                  onClick={() => handleChipClick(size)}
                  variant={selectedSize === size ? "filled" : "outlined"}
                  color={selectedSize === size ? "primary" : "default"}
                  sx={{ mr: 1, mb: 1 }}
                />
              ))}
            </Box>
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
            onClick={handleAddToCart}
            disabled={!selectedSize} 
          >
            Agregar al carrito
          </Button>
        </Box>
      </Card>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Producto agregado al carrito
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default ProductCard;
