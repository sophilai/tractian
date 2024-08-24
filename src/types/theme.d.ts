import '@mui/material/Button';
import { OverridableStringUnion } from '@mui/material';
import { ButtonPropsVariantOverrides as MUIButtonPropsVariantOverrides } from '@mui/material/Button';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    header: true;
    bodyActive: true;
    bodyInactive: true;
  }
}