import styled from "styled-components";
import { Button, Flex, useModal } from "../../uikit";
import ChainSearchModal from "../modal/ChainSearchModal";

interface ChainSelectorProps {
  chain?: any;
  disableChainSelect?: boolean;
  setChain?: any;
  hideInfo?: boolean;
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
  disableChainSelect = false,
  setChain,
  hideInfo = false,
  title,
}: ChainSelectorProps) {
  const [onPresentChainModal] = useModal(
    <ChainSearchModal
      onChainSelect={(e: number) => {
        setChain(e);
      }}
    />
  );

  return (
    <>
      <Flex flexDirection="row" alignItems="center">
        <ChainSelectButton
          className="open-chain-select-button"
          onClick={() => {
            if (!disableChainSelect) {
              onPresentChainModal();
            }
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

            {!hideInfo && !disableChainSelect && (
              <img
                src="/images/home2.0/green-down-arrow.svg"
                alt="arrow-down"
                style={{ paddingLeft: "10px" }}
              />
            )}
          </Flex>
        </ChainSelectButton>
      </Flex>
    </>
  );
}
