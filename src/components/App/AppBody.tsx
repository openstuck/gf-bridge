import React from "react";
import styled from "styled-components";
import { Card, Box, Flex } from "../../uikit";

export const StyledSwapContainer = styled(Flex)<{ $isChartExpanded: boolean }>`
  flex-shrink: 0;
  height: fit-content;
  padding: 0 24px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 0 40px;
  }

  ${({ theme }) => theme.mediaQueries.xxl} {
    ${({ $isChartExpanded }) =>
      $isChartExpanded ? "padding: 0 120px" : "padding: 0 40px"};
  }
`;

export const StyledInputCurrencyWrapper = styled(Box)`
  max-width: 600px;
  width: 328px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 450px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 600px;
  }
`;
export const BodyWrapper = styled(Card)`
  border-radius: 24px;
  // max-width: 436px;
  background: #000500;
  width: 100%;
  z-index: 1;
`;

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return (
    <StyledInputCurrencyWrapper>
      <BodyWrapper background="#000500">{children}</BodyWrapper>
    </StyledInputCurrencyWrapper>
  );
}
