import { createTheme } from '@mui/material/styles';

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
                color: '#FFFFFF', // Cor do texto
                backgroundColor: '#007BFF', // Cor de fundo
                border: 'none',
                '&:hover': {
                  backgroundColor: '#0056b3', // Cor de fundo ao passar o mouse
                },
              },
            },
            {
              props: { variant: 'headerInactive' },
              style: {
                color: '#6C757D', // Cor do texto
                backgroundColor: '#F8F9FA', // Cor de fundo
                border: '1px solid #6C757D', // Borda
                '&:hover': {
                  backgroundColor: '#E2E6EA', // Cor de fundo ao passar o mouse
                },
              },
            },
            {
              props: { variant: 'bodyActive' },
              style: {
                color: '#FFFFFF', // Cor do texto
                backgroundColor: '#28A745', // Cor de fundo
                border: 'none',
                '&:hover': {
                  backgroundColor: '#218838', // Cor de fundo ao passar o mouse
                },
              },
            },
            {
              props: { variant: 'bodyInactive' },
              style: {
                color: '#6C757D', // Cor do texto
                backgroundColor: '#E9ECEF', // Cor de fundo
                border: '1px solid #6C757D', // Borda
                '&:hover': {
                  backgroundColor: '#DEE2E6', // Cor de fundo ao passar o mouse
                },
              },
            },
          ],
        },
      },
  });
  
  export default theme;