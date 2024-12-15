import styled from "styled-components";
import { Button, Flex } from "../../uikit";
import { useAppKit, useAppKitNetwork } from "@reown/appkit/react";
import { getChainByChainId } from "../../utils/chains";

interface ChainSelectorProps {
  // chain?: any;
  title?: string;
}
const ChainSelectButton = styled(Button).attrs({
  variant: "text",
  scale: "sm",
})`
  padding: 0 0.5rem;
`;

export default function ChainSelector({
  // chain = { icon: "/images/home2.0/coin-icons/bnb.svg", name: "Binance" },
  title,
}: ChainSelectorProps) {
  const { open } = useAppKit();
  const { chainId } = useAppKitNetwork();
  const chains = getChainByChainId(chainId);
  console.log({ chains });
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
                src={chains.icon}
                alt={chains.name}
                style={{ width: "24px", height: "24px", marginRight: "6px" }}
              />
              {chains.name}
            </Flex>
          </Flex>
        </ChainSelectButton>
      </Flex>
    </>
  );
}
