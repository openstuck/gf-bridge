import { AutoColumn } from "../../components/Layout/Column";
import { RowBetween } from "../../components/Layout/Row";
import React from "react";
import { Flex, Heading, Text, Toggle } from "../../uikit";

export default function Refuel() {
  const [refuelEnabled, setRefuelEnabled] = React.useState(false);
  const toggleRefuel = () => setRefuelEnabled(!refuelEnabled);
  return (
    <Flex
      alignItems="center"
      background="#0A1517"
      p="20px 12px"
      style={{ borderRadius: "4px" }}
      width="100%"
    >
      <RowBetween>
        <Flex flexDirection="row" alignItems="center" width="100%">
          <AutoColumn gap="4px">
            <Flex alignItems="center">
              <img
                src="/images/home2.0/gas-pump.svg"
                alt="gas-pump"
                style={{ width: "24px", height: "24px", marginRight: "6px" }}
              />
              <Heading
                color="textSubtle"
                style={{ fontSize: "16px", fontWeight: "lighter" }}
              >
                Enable Refuel
              </Heading>
              <img
                src="/images/home2.0/info-new.svg"
                alt="info-new"
                style={{ paddingLeft: "10px" }}
              />
            </Flex>
            <Flex alignItems="center" style={{ paddingLeft: "32px" }}>
              <Text
                color="textSubtle"
                style={{ fontSize: "14px", fontWeight: "lighter" }}
              >
                Get RBA for transactions on Roburna
              </Text>
            </Flex>
          </AutoColumn>
        </Flex>
        <Flex alignItems="center" paddingLeft="4px">
          <Toggle checked={refuelEnabled} onChange={toggleRefuel} />
        </Flex>
      </RowBetween>
    </Flex>
  );
}
