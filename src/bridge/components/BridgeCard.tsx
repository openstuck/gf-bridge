import { AppBody } from "../../components/App";
import { AutoColumn } from "../../components/Layout/Column";
import { RowBetween } from "../../components/Layout/Row";

import { ArrowDownIcon, Button, Flex, Heading, Input, Text } from "../../uikit";
import { useAppKit } from "@reown/appkit/react";

import { chains } from "../../utils/chains";

// import CurrencyCard from "./CurrencyCard";
import ChainSelector from "./ChainSelector";
import Refuel from "./Refuel";
import AddressModal from "../modal/AddressModal";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 1rem;
`;

export default function BridgeCard() {
  return (
    <Flex
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <AppBody>
        <Wrapper
          id="bridge-page"
          style={{
            background: "#060F11",
          }}
        >
          <div style={{ padding: "0px 6px" }}>
            <AutoColumn>
              <Heading as="h2">
                <div
                  style={{
                    fontSize: "20px",
                    fontStyle: "500",
                    padding: "8px 0px",
                  }}
                >
                  Transfer
                </div>
              </Heading>

              <>
                <Flex
                  flexDirection="column"
                  background="#0A1517"
                  alignItems="center"
                  style={{ borderRadius: "4px" }}
                >
                  <RowBetween
                    align="center"
                    className="padding-imp"
                    style={{ borderBottom: "1px solid #222230" }}
                  >
                    {/* <ChainSelector
                      chain={chains[chain - 1]}
                      setChain={setChain}
                      title="From"
                    />
                    {account && (
                      <Flex alignItems="center">
                        <Text
                          onClick={handleMaxInput}
                          color="textSubtle"
                          fontSize="16px"
                          style={{
                            display: "inline",
                            cursor: "pointer",
                            paddingRight: "10px",
                          }}
                        >
                          {currencies[Field.INPUT]
                            ? t("Bal: %balance%", {
                                balance:
                                  selectedCurrencyBalance?.toSignificant(6) ??
                                  t("Loading"),
                              })
                            : " -"}
                        </Text>
                        <Text fontSize="14px" color="textSubtle">
                          MAX
                        </Text>
                      </Flex>
                    )} */}
                  </RowBetween>
                  <RowBetween align="center" className="padding-imp">
                    {/* <Input
                      type="number"
                      className="amountInput"
                      placeholder="0.0"
                      defaultValue={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    <CurrencyCard
                      titleLabel="From"
                      label={
                        independentField === Field.OUTPUT && !showWrap && trade
                          ? t("From (estimated)")
                          : t("From")
                      }
                      value={formattedAmounts[Field.INPUT]}
                      showMaxButton={!atMaxAmountInput}
                      currency={currencies[Field.INPUT]}
                      onUserInput={handleTypeInput}
                      onMax={handleMaxInput}
                      onCurrencySelect={handleInputSelect}
                      hideBalance
                      hideFrom
                      otherCurrency={currencies[Field.OUTPUT]}
                      id="bridge-currency-input"
                      imgURl="/images/home2.0/purple-ethereum.svg"
                    /> */}
                  </RowBetween>
                </Flex>
                <Flex width="100%" justifyContent="center" alignItems="center">
                  <div className="rounded-circle">
                    <img
                      src="/images/home2.0/arrow-down-thin.svg"
                      alt="arrow-down"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </div>
                </Flex>
                <Flex
                  flexDirection="column"
                  background="#0A1517"
                  style={{ marginTop: "20px", borderRadius: "4px" }}
                >
                  <AutoColumn gap="md">
                    <RowBetween align="center" className="padding-imp">
                      {/* <ChainSelector
                        chain={chains[2]}
                        setChain={setChain}
                        hideInfo
                        title="To"
                      /> */}

                      {/* {account && (
                        <Flex alignItems="center">
                          <Text
                            onClick={handleMaxInput}
                            color="textSubtle"
                            fontSize="16px"
                            style={{ display: "inline", cursor: "pointer" }}
                          >
                            {currencies[Field.INPUT]
                              ? t("Bal: %balance%", {
                                  balance: 0 ?? t("Loading"),
                                })
                              : " -"}
                          </Text>
                        </Flex>
                      )} */}
                    </RowBetween>
                  </AutoColumn>
                  <RowBetween align="center" className="padding-imp">
                    {/* <Input
                      type="number"
                      className="amountInput"
                      placeholder="0.0"
                      defaultValue={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    /> */}
                    <ArrowDownIcon />
                  </RowBetween>
                </Flex>
              </>
            </AutoColumn>
            <AutoColumn gap="" style={{ marginTop: "20px" }}>
              <Refuel />
            </AutoColumn>
            <AutoColumn style={{ marginTop: "20px" }}>
              {/* {accountEllipsis ? (
                <Button variant="quaternary"> {accountEllipsis}</Button>
              ) : (
                <Button onClick={onPresentConnectModal} variant="quaternary">
                  {t("Connect Wallet")}
                </Button>
              )} */}
            </AutoColumn>
            <Flex alignItems="center" style={{ marginTop: "20px" }}>
              <RowBetween align="center">
                {/* <Text fontSize="14px" color="textSubtle">
                  {t("Recipient Address")}
                </Text>
                <Flex alignItems="center" onClick={handleAddressModal}>
                  <img
                    src="/images/home2.0/add-icon.svg"
                    alt="address-icon"
                    style={{
                      width: "24px",
                      height: "24px",
                      marginRight: "10px",
                    }}
                  />
                  <Text fontSize="16px" color="textSubtle" paddingTop="3px">
                    Add Address
                  </Text>
                </Flex> */}
              </RowBetween>
            </Flex>
          </div>
        </Wrapper>
      </AppBody>
      <Flex
        position="absolute"
        width="100%"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "20px" }}
      >
        {/* {showAddressModal && (
          <AddressModal
            onDismiss={() => setShowAddressModal(false)}
            isOpen={showAddressModal}
          />
        )} */}
      </Flex>
    </Flex>
  );
}
