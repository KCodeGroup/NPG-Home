import { createTheme } from "@mui/material/styles";

// Color palette
export const colors = {
  primary: "#0C1F35", // Dark blue
  secondary: "#BD8353", // Gold/Bronze
  light: "#F9EBDC", // Cream
  gray: "#797979", // Gray
  dark: "#1D1D1D", // Almost black
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      contrastText: colors.light,
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.light,
    },
    background: {
      default: colors.light,
      paper: "#FFFFFF",
    },
    text: {
      primary: colors.dark,
      secondary: colors.gray,
    },
  },
  typography: {
    fontFamily:
      '"Bricolage Grotesque", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
