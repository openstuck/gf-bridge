import { ethers, BigNumber as BN } from "ethers";
import { staticProvider } from "./staticProvider";

export const getTokenBalance = async (
  chainId: number | string | undefined,
  address: string | undefined,
  tokenAddress: string | undefined
) => {
  console.log({ chainId, address, tokenAddress });
  if (!chainId) chainId = 1;

  if (!address || !tokenAddress) return "0";

  const provider = staticProvider(Number(chainId));

  const contract = new ethers.Contract(
    tokenAddress,
    ["function balanceOf(address) view returns (uint256)"],
    provider
  );

  const balance = await contract.balanceOf(address);

  if (!balance) return "0";

  return BN.from(balance).toString();
};
