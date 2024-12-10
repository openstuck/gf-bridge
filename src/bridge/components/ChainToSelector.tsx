import { useState } from "react";
import styled from "styled-components";
import { Button, Flex, Text, Heading } from "../../uikit";
import Modal from "react-bootstrap/Modal";
import { chains } from "../../utils/chains";
import { useSetAtom } from "jotai";
import { chainToAtom } from "../../state/chainto";

interface ChainSelectorProps {
  chain?: any;
  setChain?: any;
  title?: string;
}
const ChainSelectButton = styled(Button).attrs({
  variant: "text",
  scale: "sm",
})`
  padding: 0 0.5rem;
`;
export default function ChainToSelector({
  chain = { icon: "/images/home2.0/coin-icons/bnb.svg", name: "Binance" },
  title,
}: ChainSelectorProps) {
  const [show, setShow] = useState(false);

  const selectChain = useSetAtom(chainToAtom);

  return (
    <>
      <Flex flexDirection="row" alignItems="center">
        <ChainSelectButton
          className="open-chain-select-button2"
          onClick={() => setShow(true)}
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
            Choose Destination Network
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#000500 !important" }}>
          {chains.map((chain) => (
            <Flex
              className="hover-option"
              alignItems="center"
              mb={3}
              onClick={() => {
                selectChain(() => chain.chainId);
                setShow(false);
              }}
            >
              <img
                src={chain.icon}
                alt={chain.name}
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
    </>
  );
}
