import { ThemeProvider } from "styled-components";
import { dark } from "./uikit";

export const ThemeProviderWrapper = (props: any) => {
  return <ThemeProvider theme={dark} {...props} />;
};
