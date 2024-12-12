import { useState } from "react";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import { ChevronDownIcon, Button, Flex, Heading, Text } from "../../uikit";
import { useAtomValue, useSetAtom } from "jotai";
import {
  getBridgedTokens,
  getTokenImage,
  getTokenSymbol,
} from "../../config/tokenlist";
import { useAppKitNetwork } from "@reown/appkit/react";
import { bridgedToken } from "../../state/bridgetoken";
// import { RowBetween } from "../../components/Layout/Row";

const CurrencySelectButton = styled(Button).attrs({
  variant: "text",
  scale: "sm",
})`
  padding: 0 0.5rem;
`;
const TokenSelect = () => {
  const [show, setShow] = useState(false);
  const { chainId } = useAppKitNetwork();

  const listToken = getBridgedTokens(chainId);
  const setBridgeData = useSetAtom(bridgedToken);
  const bridgeData = useAtomValue(bridgedToken);

  const tokenImage = getTokenImage(bridgeData.chainId, bridgeData.address);
  const tokenSymbol = getTokenSymbol(bridgeData.chainId, bridgeData.address);

  return (
    <CurrencySelectButton>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        style={{ marginRight: "6px" }}
        onClick={() => setShow(true)}
      >
        <>
          <img
            src={tokenImage}
            alt={tokenSymbol}
            style={{ width: "24px", height: "24px", marginRight: "10px" }}
          />
          {tokenSymbol}
        </>
        <ChevronDownIcon width="32px" color="textSubtle" />
      </Flex>

      <Modal
        style={{ background: "#000500 !important" }}
        show={show}
        onHide={() => setShow(false)}
        centered
        contentClassName="chain-modal"
        aria-labelledby="choose network"
      >
        <Modal.Header closeButton>
          <Modal.Title as={Heading} id="choose network">
            Select Token
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#000500 !important" }}>
          {listToken.map((chain) => (
            <Flex
              key={"list" + chain.chainId}
              className="hover-option"
              alignItems="center"
              mb={3}
              onClick={() => {
                setBridgeData((data) => {
                  return {
                    ...data,
                    chainId: chain.chainId,
                    address: chain.address,
                  };
                });
                setShow(false);
              }}
            >
              <img
                src={chain.logoURI}
                alt={chain.symbol}
                style={{ width: "24px", height: "24px", marginRight: "10px" }}
              />
              <Text fontSize="18px">{chain.name}</Text>
            </Flex>
          ))}
        </Modal.Body>
        <Modal.Footer style={{ background: "#000500 !important" }}>
          <Button
            scale="sm"
            variant="secondary"
            style={{
              border: "1px solid #808080",
              borderRadius: "10px",
              marginRight: "24px",
              float: "right",
            }}
            onClick={() => setShow(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </CurrencySelectButton>
  );
};

export default TokenSelect;
