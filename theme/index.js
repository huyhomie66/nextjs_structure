import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
let defaultTheme = createMuiTheme({
  spacing : factor => `${0.25 * factor}rem`, 
    heightSpace : factor => `${12 * factor}vh`, 
    withSpace: factor => `${12 * factor}vw`, 
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
    darkBlue: "rgba(4, 46, 55, 0.803)",
    active: "#4EE2EC",
    background: {
      default: "#fff",
    },
  },
});

const {
  breakpoints,
  typography: { pxToRem },
} = defaultTheme;

const theme = {
  ...defaultTheme,
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "5.3rem",
        [breakpoints.down("md")]: {
          fontSize: "4.7rem",
        },
        [breakpoints.down("sm")]: {
          fontSize: "3.5rem",
        },
      },
      h2: {
        fontSize: "3.3rem",
        [breakpoints.down("md")]: {
          fontSize: "2.9rem",
        },
        [breakpoints.down("sm")]: {
          fontSize: "2.3rem",
        },
      },
      h3: {
        fontSize: "2.7rem",
        [breakpoints.down("md")]: {
          fontSize: "2.5rem",
        },
        [breakpoints.down("sm")]: {
          fontSize: "1rem",
        },
      },
      h4: {
        fontSize: "2rem",
        [breakpoints.down("md")]: {
          fontSize: "1.8rem",
        },
        [breakpoints.down("sm")]: {
          fontSize: "1.56rem",
        },
      },
      h5: {
        fontSize: "1.5rem",
        [breakpoints.down("md")]: {
          fontSize: "1.3rem",
        },
        [breakpoints.down("sm")]: {
          fontSize: "1.25rem",
        },
      },
      h6: {
        fontSize: "1.25rem",
        [breakpoints.down("sm")]: {
          fontSize: "1.125rem",
        },
      },
    },
  },
};

// theme = responsiveFontSizes(theme);
export default theme;
