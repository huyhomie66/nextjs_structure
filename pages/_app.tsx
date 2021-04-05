// import "@/pages/styles/globals.css";
import "@/styles/background.css";
import "@/styles/earth.css";
import "@/styles/navbar-container.css";
import "@/styles/navbar-container.css";
import React, { useEffect } from "react";
import theme from "@/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

function App({ Component, pageProps }: any) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
