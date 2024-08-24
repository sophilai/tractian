import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface ButtonPropsVariantOverrides {
    headerActive: true;
    headerInactive: true;
    bodyActive: true;
    bodyInactive: true;
  }
}