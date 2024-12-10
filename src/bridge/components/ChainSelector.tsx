import styled from "styled-components";
import { Button, Flex } from "../../uikit";
import { useAppKit } from "@reown/appkit/react";

interface ChainSelectorProps {
  chain?: any;
  title?: string;
}
const ChainSelectButton = styled(Button).attrs({
  variant: "text",
  scale: "sm",
})`
  padding: 0 0.5rem;
`;

export default function ChainSelector({
  chain = { icon: "/images/home2.0/coin-icons/bnb.svg", name: "Binance" },
  title,
}: ChainSelectorProps) {
  const { open } = useAppKit();
  return (
    <>
      <Flex flexDirection="row" alignItems="center">
        <ChainSelectButton
          className="open-chain-select-button"
          onClick={() => {
            open({
              view: "Networks",
            });
          }}
        >
          <Flex alignItems="center" justifyContent="space-between">
            <span>{title}</span>

            <Flex alignItems="center" ml={3}>
              <img
                src={chain.icon}
                alt={chain.name}
                style={{ width: "24px", height: "24px", marginRight: "6px" }}
              />
              {chain.name}
            </Flex>
          </Flex>
        </ChainSelectButton>
      </Flex>
    </>
  );
}
