import React from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import Videocam  from '@mui/icons-material/Videocam';

const Contact = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contacto
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        ¡Conéctate con nosotros en nuestras redes!
      </Typography>

      <Grid container spacing={4} sx={{ marginTop: '20px' }} justifyContent="center">
        <Grid item>
          <IconButton
            href={`https://wa.me/${process.env.REACT_APP_WPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            color="success"
            sx={{ fontSize: '3rem' }}
          >
            <WhatsAppIcon fontSize="inherit" />
          </IconButton>
          <Typography variant="body1">WhatsApp</Typography>
        </Grid>

        <Grid item>
          <IconButton
            href="https://www.instagram.com/pilcha.sm"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            sx={{ fontSize: '3rem' }}
          >
            <InstagramIcon fontSize="inherit" />
          </IconButton>
          <Typography variant="body1">Instagram</Typography>
        </Grid>

        <Grid item>
          <IconButton
            href="https://www.tiktok.com/@tuUsuarioTikTok"
            target="_blank"
            rel="noopener noreferrer"
            color="secondary"
            sx={{ fontSize: '3rem' }}
          >
            <Videocam fontSize="inherit" />
          </IconButton>
          <Typography variant="body1">TikTok</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
