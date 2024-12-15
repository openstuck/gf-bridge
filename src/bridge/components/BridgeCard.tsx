import { AppBody } from "../../components/App";
import { AutoColumn } from "../../components/Layout/Column";
import { RowBetween } from "../../components/Layout/Row";
import { useAtomValue, useSetAtom } from "jotai";

import { Flex, Heading, Input, Text, Button } from "../../uikit";
import {
  useAppKitNetwork,
  useAppKitAccount,
  useAppKit,
} from "@reown/appkit/react";

import {
  getBridgeAddressByChainId,
  getChainByChainId,
} from "../../utils/chains";

// import CurrencyCard from "./CurrencyCard";
import ChainSelector from "./ChainSelector";
import ChainToSelector from "./ChainToSelector";

// import Refuel from "./Refuel";
import styled from "styled-components";
import { chainToAtom } from "../../state/chainto";
import TokenSelect from "./TokenSelect";
import { bridgedToken } from "../../state/bridgetoken";
import {
  getTokenDecimals,
  getTokenImage,
  getTokenSymbol,
} from "../../config/tokenlist";
import { useQuery } from "@tanstack/react-query";
import {
  getTokenAllowance,
  getTokenBalance,
} from "../../utils/getTokenBalance";
import {
  getFullDisplayBalance,
  toBigNumber,
  tryParseAmount,
} from "../../utils/formatBalance";
import { BigNumber } from "ethers";

export const Wrapper = styled.div`
  position: relative;
  padding: 1rem;
`;

export default function BridgeCard() {
  const { chainId } = useAppKitNetwork();
  const { address } = useAppKitAccount();
  const { open } = useAppKit();

  const handleMaxInput = () => {};

  const activeChain = chainId ? Number(chainId) : 1;

  const setBridgeData = useSetAtom(bridgedToken);

  const chainTo = useAtomValue(chainToAtom);
  const bridgeData = useAtomValue(bridgedToken);

  const tokenImage = getTokenImage(bridgeData.chainId, bridgeData.address);
  const tokenSymbol = getTokenSymbol(bridgeData.chainId, bridgeData.address);
  const tokenDecimals = getTokenDecimals(
    bridgeData.chainId,
    bridgeData.address
  );

  const userBalance = useQuery({
    queryKey: ["tokenbalance" + chainId + address + bridgeData.address],
    queryFn: async () => {
      const data = await getTokenBalance(chainId, address, bridgeData.address);
      return data;
    },
  });

  const userAllowance = useQuery({
    queryKey: ["allowance" + chainId + address + bridgeData.address],
    queryFn: async () => {
      const bridgeAddress = getBridgeAddressByChainId(bridgeData.chainId);
      const data = await getTokenAllowance(
        chainId,
        address,
        bridgeAddress,
        bridgeData.address
      );
      return data;
    },
  });

  const handleInputChange = (e: any) => {
    const amt = tryParseAmount(e.target.value, tokenDecimals);

    if (amt) {
      setBridgeData({
        ...bridgeData,
        amount: e.target.value,
        formattedAmount: amt,
      });
    }
  };
  // console.log(bridgeData);

  const alreadyAppove = userAllowance.data?.gte(
    BigNumber.from(bridgeData.formattedAmount)
  );

  console.log({ alreadyAppove, allow: userAllowance.data });

  const handleApprove = async () => {};

  const handleTransfer = async () => {};

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
                    <ChainSelector title="From" />
                    {address && (
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
                          {getFullDisplayBalance(
                            toBigNumber(userBalance.data),
                            tokenDecimals
                          )}
                        </Text>
                        {/* <Text fontSize="14px" color="textSubtle">
                          MAX
                        </Text> */}
                      </Flex>
                    )}
                  </RowBetween>
                  <RowBetween align="center" className="padding-imp">
                    <Input
                      type="number"
                      className="amountInput"
                      placeholder="0.0"
                      scale="md"
                      defaultValue={bridgeData.amount}
                      onChange={handleInputChange}
                    />
                    <TokenSelect />
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
                    <RowBetween
                      align="center"
                      className="padding-imp"
                      style={{ borderBottom: "1px solid #222230" }}
                    >
                      <ChainToSelector
                        chain={getChainByChainId(chainTo)}
                        title="To"
                      />
                    </RowBetween>
                  </AutoColumn>
                  <RowBetween align="center" className="padding-imp">
                    <Input
                      type="number"
                      readOnly
                      value={bridgeData.receiveAmount}
                      className="amountInput"
                      placeholder="0.0"
                    />
                    <>
                      <img
                        src={tokenImage}
                        alt={tokenSymbol}
                        style={{
                          width: "24px",
                          height: "24px",
                          marginRight: "10px",
                        }}
                      />
                      {tokenSymbol}
                    </>
                  </RowBetween>
                </Flex>
              </>
            </AutoColumn>

            <AutoColumn style={{ marginTop: "20px" }}>
              {!address && (
                <Button
                  onClick={() => open({ view: "Connect" })}
                  variant="quaternary"
                >
                  {"Connect Wallet"}
                </Button>
              )}

              {address && alreadyAppove ? (
                <Button onClick={() => handleTransfer()} variant="quaternary">
                  {"Transfer"}
                </Button>
              ) : (
                <Button onClick={() => handleApprove()} variant="quaternary">
                  {"Approve"}
                </Button>
              )}
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
      ></Flex>
    </Flex>
  );
}
