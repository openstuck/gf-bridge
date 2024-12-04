import React, { cloneElement } from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import Input from "./Input";
import { InputGroupProps, scales, Scales } from "./types";

const getPadding = (scale: Scales, hasIcon: boolean) => {
  if (!hasIcon) {
    return "16px";
  }

  switch (scale) {
    case scales.SM:
      return "32px";
    case scales.LG:
      return "56px";
    case scales.MD:
    default:
      return "48px";
  }
};

const StyledInputGroup = styled(Box)<{ scale: Scales; hasStartIcon: boolean; hasEndIcon: boolean }>`
  display: flex;
  // padding-left: ${({ hasStartIcon, scale }) => getPadding(scale, hasStartIcon)};
  padding-right: ${({ hasEndIcon, scale }) => getPadding(scale, hasEndIcon)};
  background: transparent;
  border-radius: 50px;
  //border: 1px solid white;
  ${Input} {
    margin: auto;
    border: none;
    background-color: transparent;

    &:hover, &:focus {
      border-color: transparent;
      box-shadow: none;
    }
  }
`;

const InputIcon = styled.div<{ scale: Scales; isEndIcon?: boolean }>`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  top: 0;
  cursor: pointer;

  ${({ isEndIcon, scale }) =>
    isEndIcon
      ? `
    right: ${scale === scales.SM ? "8px" : "16px"};
  `
      : `
    left: ${scale === scales.SM ? "8px" : "16px"};
  `}
`;

const ItemGroup = styled.div`
  margin: auto;
  height: 100%;
  top: 0;
  padding: 0px 8px;
  border-right: 1px solid #52555c;
`

const InputGroup = ({ scale = scales.MD, startIcon, startItem, endIcon, children, onEndClick, ...props }: InputGroupProps): JSX.Element => (
  <StyledInputGroup
    scale={scale}
    width="100%"
    position="relative"
    hasStartIcon={!!startIcon}
    hasEndIcon={!!endIcon}
    {...props}
  >
    {startIcon && <InputIcon scale={scale}>{startIcon}</InputIcon>}
    {startItem && <ItemGroup>{startItem}</ItemGroup>}
    {cloneElement(children, { scale })}
    {endIcon && (
      <InputIcon scale={scale} isEndIcon onClick={onEndClick}>
        {endIcon}
      </InputIcon>
    )}
  </StyledInputGroup>
);

export default InputGroup;
