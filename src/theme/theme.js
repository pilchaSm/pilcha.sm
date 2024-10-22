import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f5280c', // Color similar al del sitio
    },
    secondary: {
      main: '#f5280c',
    },
    background: {
      default: '#f7f7f7', // Fondo claro
    },
    text: {
      primary: '#080000', // Color del texto
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // MUI usa Roboto por defecto
    h5: {
      fontSize: '1.2rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    body2: {
      fontSize: '0.875rem',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            fontSize: '0.8rem',
            padding: '6px 12px',
          },
        },
      },
    },
  },
});

export default theme;
