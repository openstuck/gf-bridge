import { ThemeProvider } from "styled-components";
import { dark } from "./uikit";

export const ThemeProviderWrapper = (props) => {
  return <ThemeProvider theme={dark} {...props} />;
};
