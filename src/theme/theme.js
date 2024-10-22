
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
  },
});

export default theme;
