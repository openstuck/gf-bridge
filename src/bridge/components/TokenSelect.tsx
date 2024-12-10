// import React from "react";
import styled from "styled-components";

import { ChevronDownIcon, Button, Flex } from "../../uikit";
// import { RowBetween } from "../../components/Layout/Row";

const CurrencySelectButton = styled(Button).attrs({
  variant: "text",
  scale: "sm",
})`
  padding: 0 0.5rem;
`;
const TokenSelect = () => {
  return (
    <CurrencySelectButton>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        style={{ marginRight: "-16px" }}
      >
        <>Token</>
        <ChevronDownIcon width="32px" color="textSubtle" />
      </Flex>
    </CurrencySelectButton>
  );
};

export default TokenSelect;
