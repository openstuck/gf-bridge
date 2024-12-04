import styled, { DefaultTheme } from "styled-components";
import { space, layout, variant as  defaultVariant} from "styled-system";
import { scaleVariants, styleVariants } from "./theme";
import { BaseButtonProps } from "./types";

interface ThemedButtonProps extends BaseButtonProps {
  theme: DefaultTheme;
}

interface TransientButtonProps extends ThemedButtonProps {
  $isLoading?: boolean;
}

const getDisabledStyles = ({ $isLoading, theme }: TransientButtonProps) => {
  if ($isLoading === true) {
    return `
      &:disabled,
      &.pancake-button--disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled,
    &.pancake-button--disabled {
      background-color: ${theme.colors.backgroundDisabled};
      border-color: ${theme.colors.backgroundDisabled};
      box-shadow: none;
      color: ${theme.colors.textDisabled};
      cursor: not-allowed;
    }
  `;
};

const getHoverStyles = ({variant}: BaseButtonProps) => {
  if (variant === "primary") {
    return `
      border-radius: 50px;
      padding: 15px 30px;
      -webkit-transition: all ease 0.5s;
      transition: all ease 0.5s;
      color: white;
      z-index: 1;
      overflow: hidden;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #506D2C;
        z-index: -1;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all ease 0.5s;
        transition: all ease 0.5s;
      }

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #506D2C;
        z-index: -1;
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
        -webkit-transition: all ease 0.5s;
        transition: all ease 0.5s;
      }

      &:hover {
        border-color: #506D2C;
      }
    `
  }
  if (variant === "secondary") {
    return `
      border-radius: 50px;
      padding: 15px 30px;
      -webkit-transition: all ease 0.5s;
      transition: all ease 0.5s;
      color: white;
      z-index: 1;
      overflow: hidden;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #506D2C;
        z-index: -1;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all ease 0.5s;
        transition: all ease 0.5s;
      }

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #506D2C;
        z-index: -1;
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
        -webkit-transition: all ease 0.5s;
        transition: all ease 0.5s;
      }

      &:hover {
        border-color: #506D2C;
      }
      
      &:hover::before {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }

      &:hover::after {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
      }
    `
  }
  if(variant === "tertiary") {
    return `
      padding: 15px 30px;
    `
  }

  if(variant === "quaternary") {
    return `
    border-radius: 4px;
    padding: 30px 30px;
    font-size: 18px;
    font-family: 'inter';
    font-weight: 600;
    background-color: #4C6D2B    ;
    -webkit-transition: all ease 0.5s;
    transition: all ease 0.5s;
    color: white;
    z-index: 1;
    overflow: hidden;
    position: relative;
    `
  }
  return ``
  // if(variant === "subtle") {
  //   return `
  //     color: #27262c !important;
  //   `
  // }
}

/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */

const getOpacity = ({ $isLoading = false }: TransientButtonProps) => {
  return $isLoading ? ".5" : "1";
};

const StyledButton = styled.button<BaseButtonProps>`
  align-items: center;
  border: 0;
  border-radius: 16px;
  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: ${getOpacity};
  outline: 0;
  transition: background-color 0.2s, opacity 0.2s;

  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    // opacity: 0.65;
  }

  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }

  ${getDisabledStyles}
  ${defaultVariant({
    prop: "scale",
    variants: scaleVariants,
  })}
  ${defaultVariant({
    variants: styleVariants,
  })}
  ${layout}
  ${space}
  ${getHoverStyles}
`;

export default StyledButton;
