import { createTheme } from "@mui/material";

export const appTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1860,
    },
  },
  palette: {
    primary: {
      main: "#8051b9",
    },
    secondary: {
      main: "#f50057",
    },
  },
});
