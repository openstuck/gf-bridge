import BigNumber from "bignumber.js";
import { ethers } from "ethers";
export type SerializedBigNumber = string;

export const BIG_ZERO = new BigNumber(0);
export const BIG_ONE = new BigNumber(1);
export const BIG_NINE = new BigNumber(9);
export const BIG_TEN = new BigNumber(10);

export const MAX_APPROVE = ethers.BigNumber.from(
  "115792089237316195423570985008687907853269984665640564039457584007913129639935"
);

export const ethersToSerializedBigNumber = (
  ethersBn: ethers.BigNumber
): SerializedBigNumber => ethersToBigNumber(ethersBn).toJSON();

export const ethersToBigNumber = (ethersBn: ethers.BigNumber): BigNumber =>
  new BigNumber(ethersBn.toString());

export const formatInputToStringValue = (
  amount: string,
  decimal: number
): string => {
  if (!amount) return "0";
  if (!decimal) return "0";
  return ethers.utils.parseUnits(amount, decimal).toString();
};
