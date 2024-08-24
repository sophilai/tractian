import '@mui/material/Button';
import { OverridableStringUnion } from '@mui/material';
import { ButtonPropsVariantOverrides as MUIButtonPropsVariantOverrides } from '@mui/material/Button';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    headerActive: true;
    headerInactive: true;
    bodyActive: true;
    bodyInactive: true;
  }
}