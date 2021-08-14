import { createTheme } from "@material-ui/core";

export default createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
          scrollBehavior: "smooth",
        },
      },
    },
  },
  colors: {
    white: "#fff",
    black: "#000",
    transparent: "transparent",
    red: "rgba(245, 44, 62)",
  },
});
