export const chains = [
  {
    name: "Binance",
    chainId: 56,
    shortName: "BNB",
    chain: "BNB",
    network: "mainnet",
    networkId: 56,
    icon: "/images/home2.0/coin-icons/bnb.svg",
    bridgeAddress: "0x0000000000000000000000000000000000002000",
  },
  {
    name: "Binance Testnet",
    chainId: 97,
    shortName: "BNB Testnet",
    chain: "BNB",
    network: "mainnet",
    networkId: 56,
    icon: "/images/home2.0/coin-icons/bnb.svg",
    bridgeAddress: "0x0000000000000000000000000000000000002000",
  },
  {
    name: "Ethereum",
    chainId: 1,
    shortName: "ETH",
    chain: "ETH",
    networkId: 1,
    icon: "/images/home2.0/purple-ethereum.svg",
    bridgeAddress: "0x0000000000000000000000000000000000002000",
  },

  {
    name: "Roburna",
    chainId: 158,
    shortName: "RBA",
    chain: "RBA",
    network: "mainnet",
    networkId: 158,
    icon: "/images/home2.0/roburna-blockchain.svg",
    bridgeAddress: "0xE4ad567deb0f538762Be44Fbc574061b7A962cA3",
  },
  {
    name: "Roburna Testnet",
    chainId: 159,
    shortName: "RBA Testnet",
    chain: "RBA Testnet",
    network: "mainnet",
    networkId: 159,
    icon: "/images/home2.0/roburna-blockchain.svg",
    bridgeAddress: "0x0000000000000000000000000000000000002000",
  },
];

export const getChainByChainId = (chainId: number | undefined | string) => {
  console.log({ chainId });
  if (!chainId) return chains[0];
  const numChain = Number(chainId);
  return chains.find((chain) => chain.chainId === numChain) || chains[0];
};

export const getBridgeAddressByChainId = (
  chainId: number | undefined | string
) => {
  if (!chainId) return "0x0000000000000000000000000000000000001000";
  const numChain = Number(chainId);
  return (
    chains.find((chain) => chain.chainId === numChain)?.bridgeAddress ||
    "0x0000000000000000000000000000000000001000"
  );
};
