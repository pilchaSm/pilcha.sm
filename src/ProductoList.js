import React, { useEffect, useState } from 'react';
import { fetchImagesFromDrive } from './service/Drive';
import { Grid, Container } from '@mui/material';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      const fetchedImages = await fetchImagesFromDrive();
      setImages(fetchedImages);
      setLoading(false);
    };

    loadImages();
  }, []);

  if (loading) {
    return <div>Cargando imágenes...</div>;
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <div>
              <h4>{image.name}</h4>
              <img src={image.webContentLink} alt={image.name} style={{ width: '100%' }} />
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ImageGallery;