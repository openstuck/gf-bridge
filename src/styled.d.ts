import "styled-components";
import { PancakeTheme as myTheme } from "./uikit";

declare module "styled-components" {
  interface DefaultTheme extends myTheme {}
}
