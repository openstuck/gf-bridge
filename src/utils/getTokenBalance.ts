// import { ethers, BigNumber as BN } from "ethers";
import { staticProvider } from "./staticProvider";

import { Erc20__factory } from "../config/abi";
import { BigNumber } from "ethers";

export const getTokenBalance = async (
  chainId: number | string | undefined,
  address: string | undefined,
  tokenAddress: string | undefined
) => {
  // console.log({ chainId, address, tokenAddress });
  if (!chainId) chainId = 1;

  if (!address || !tokenAddress) return "0";

  const provider = staticProvider(Number(chainId));

  const contract = Erc20__factory.connect(tokenAddress, provider);

  const balance = await contract.balanceOf(address);

  if (!balance) return "0";

  return balance.toString();
};

export const getTokenAllowance = async (
  chainId: number | string | undefined,
  address: string | undefined,
  spender: string | undefined,
  tokenAddress: string | undefined
) => {
  if (!chainId) chainId = 1;

  if (!address || !tokenAddress || !spender) return BigNumber.from(0);

  const provider = staticProvider(Number(chainId));

  const contract = Erc20__factory.connect(tokenAddress, provider);

  const allowance = await contract.allowance(address, spender);

  if (!allowance) return BigNumber.from(0);

  return allowance;
};
