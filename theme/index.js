import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    darkGreen: "#25383C",
    active: "#4EE2EC",
    background: {
      default: "#fff",
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
