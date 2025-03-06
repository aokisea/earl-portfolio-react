import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1E1E1E', // Override primary color
    },
    secondary: {
      main: '#035efc',
    },
    background: {
      default: '#1E1E1E'
    },
    text: {
      primary: '#ffffff', // Override primary color
      secondary: '#000000', // Override primary color
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif', // Override font family
    fontSize: 20,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    
    h2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '500',
      color: '#fff',
    },

    h3: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: '500',
      color: '#fff',
    }
  },
});

export default theme;