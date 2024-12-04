import React, { useCallback, useState } from "react";
import { Currency, Token } from "@greenfolio/swap-sdk-0x";
import {
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalBody,
  InjectedModalProps,
  Heading,
  Button,
  Flex,
  Text,
} from "../../uikit";
import styled from "styled-components";
import { useTranslation } from "contexts/Localization";
import CurrencyModalView from "components/SearchModal/types";

import { chains } from "../../utils/chains";

const Footer = styled.div`
  width: calc(100% + 48px);
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-top: 1px solid #4c6d2b;
  margin: 0px -24px;
  padding: 20px 0px;
  text-align: center;
`;

const StyledModalContainer = styled(ModalContainer)`
  max-width: 420px;
  width: 100%;
  border-radius: 20px;
`;

const StyledModalBody = styled(ModalBody)`
  padding: 24px 24px 0px 24px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface CurrencySearchModalProps extends InjectedModalProps {
  onChainSelect: (chain: number) => void;
}
export default function CurrencySearchModal({
  onDismiss = () => null,
  onChainSelect,
}: CurrencySearchModalProps) {
  const [modalView, setModalView] = useState<CurrencyModalView>(
    CurrencyModalView.search
  );
  const { t } = useTranslation();

  const config = {
    [CurrencyModalView.search]: {
      title: t("Select a Chain"),
      onBack: undefined,
    },
  };

  return (
    <StyledModalContainer minWidth="320px">
      <ModalHeader background="#000500">
        <ModalTitle>
          <Heading style={{ marginBottom: "auto" }}>
            {config[modalView].title}
          </Heading>
        </ModalTitle>
        <ModalCloseButton onDismiss={onDismiss} />
      </ModalHeader>
      <StyledModalBody background="#000500">
        {modalView === CurrencyModalView.search
          ? chains.map((chain) => (
              <Flex
                className="hover-option"
                alignItems="center"
                mb={3}
                onClick={() => {
                  onChainSelect(chain.id);
                  onDismiss();
                }}
              >
                <img
                  src={chain.icon}
                  alt={chain.name}
                  style={{ width: "36px", height: "36px", marginRight: "10px" }}
                />
                <Text fontSize="20px">{chain.name}</Text>
              </Flex>
            ))
          : ""}
        {modalView === CurrencyModalView.search && (
          <Footer style={{ background: "#000500" }}>
            <Button
              scale="sm"
              variant="secondary"
              style={{
                border: "1px solid #808080",
                borderRadius: "10px",
                marginRight: "24px",
                float: "right",
              }}
              onClick={onDismiss}
            >
              {t("Close")}
            </Button>
          </Footer>
        )}
      </StyledModalBody>
    </StyledModalContainer>
  );
}
