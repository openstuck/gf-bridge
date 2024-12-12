import { ethers } from "ethers";

import { roburnaNetwork, roburnaTestnetNetwork } from "../config/network";
import { mainnet, bsc, bscTestnet } from "@reown/appkit/networks";

export const staticProvider = (chainId: number) => {
  const network =
    chainId === 1
      ? mainnet
      : chainId === 56
      ? bsc
      : chainId === 97
      ? bscTestnet
      : chainId === 158
      ? roburnaNetwork
      : chainId === 159
      ? roburnaTestnetNetwork
      : mainnet;

  return new ethers.providers.JsonRpcProvider(network.rpcUrls.default.http[0]);
};
