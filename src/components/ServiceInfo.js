import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ServiceInfo = () => {
  const services = [
    { icon: <LocalShippingIcon />, title: "ENVIOS", subtitle: "A todo el pais" },
    { icon: <CreditCardIcon />, title: "CONSULTAR POR MEDIO DE PAGO", subtitle: "Compra segura" },
    { icon: <WhatsAppIcon />, title: "WHATSAPP", subtitle: "Consulta tus dudas" },
  ];

  return (
    <Box sx={{ py: 2 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%' }}>
                <Box sx={{ color: 'text.secondary', mb: 0.5 }}>
                  {React.cloneElement(service.icon, { fontSize: 'small' })}
                </Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                  {service.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {service.subtitle}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceInfo;
