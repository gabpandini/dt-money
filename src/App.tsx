import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div></div>
    </ThemeProvider>
  );
}
