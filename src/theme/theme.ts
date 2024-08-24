import '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface ButtonPropsVariantOverrides {
    headerActive: true;
    headerInactive: true;
    bodyActive: true;
    bodyInactive: true;
  }
}

const theme = createTheme({
    palette: {
      primary: {
        main: '#2188FF',
        dark: "#023B78",
        contrastText: '#FFFFFF'
      },
      secondary: {
        main: '#17192D',
        light: "#D8DFE6"
      },
      common: {
        black: '#24292F',
        white: "#FFFFFF",
      },
      text: {
        primary: "#17192D",
        secondary: "#88929C",
        disabled: "#C1C9D2"
      },
      success: {
        main: "#52C41A"
      },
      error: {
        main: "#ED3833"
      }
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
    components: {
        MuiButton: {
          variants: [
            {
              props: { variant: 'headerActive' },
              style: {
                color: '#FFFFFF', 
                backgroundColor: '#007BFF',
                border: 'none',
                '&:hover': {
                  backgroundColor: '#0056b3',
                },
              },
            },
            {
              props: { variant: 'headerInactive' },
              style: {
                color: '#6C757D', 
                backgroundColor: '#F8F9FA',
                border: '1px solid #6C757D', 
                '&:hover': {
                  backgroundColor: '#E2E6EA', 
                },
              },
            },
            {
              props: { variant: 'bodyActive' },
              style: {
                color: '#FFFFFF',
                backgroundColor: '#28A745',
                border: 'none',
                '&:hover': {
                  backgroundColor: '#218838',
                },
              },
            },
            {
              props: { variant: 'bodyInactive' },
              style: {
                color: '#6C757D', 
                backgroundColor: '#E9ECEF', 
                border: '1px solid #6C757D', 
                '&:hover': {
                  backgroundColor: '#DEE2E6', 
                },
              },
            },
          ],
        },
      },
  });
  
  export default theme;