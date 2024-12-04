import styled from "styled-components";
import { StyledMenuItemProps } from "./types";

export const StyledMenuItemContainer = styled.div<StyledMenuItemProps>`
  position: relative;

  ${({menuIndex}) => 
    menuIndex === 1 && `
      width: 160px;
    `
  }}

  ${({ $isActive, $variant, theme }) =>
    $isActive &&
    $variant === "subMenu" &&
    `
      &::after{
        content: "";
        position: absolute;
        bottom: 0;
        height: 4px;
        width: 100%;
        // background-color: ${theme.colors.primary};
        color: white;
        border-radius: 2px 2px 0 0;
      }
    `};
`;

const StyledMenuItem = styled.a<StyledMenuItemProps>`
  position: relative;
  display: flex;
  align-items: center;

  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.textSubtle : theme.colors.textSubtle)};
  font-size: 16px;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
  
  ${({ $statusColor, theme }) =>
    $statusColor &&
    `
    &::after {
      content: "";
      border-radius: 100%;
      background: ${theme.colors[$statusColor]};
      height: 8px;
      width: 8px;
      margin-left: 12px;
    }
  `}

  ${({ $variant }) =>
    $variant === "default"
      ? `
    padding: 0 16px;
    height: 48px;
  `
      : `
    padding: 4px 4px 0px 4px;
    height: 42px;
  `}

  &::before {
    content: "";
    position: absolute;
    bottom: -1px;
    right: 0px;
    width: 0px;
    height: 2px;
    background: #fff;
    visibility: hidden;
    -webkit-transition: all ease 0.5s;
    transition: all ease 0.5s;
  }

  ${({$isActive}) => 
    $isActive &&
    `
    &::before{
      left: 0px;
      opacity: 1;
      width: 100%;
      visibility: visible;
    }
    `
  }

  &:hover {
    color: #fff;
    // background: ${({ theme }) => theme.colors.tertiary};
    // ${({ $variant }) => $variant === "default" && "border-radius: 16px;"};
    // border-bottom: 2px solid white;
    &::before {
      opacity: 1;
      visibility: visible;
      width: 100%;
      right: auto;
      left: 0;
    }
  }
`;

export default StyledMenuItem;
