export const chains = [
  {
    name: "Binance",
    chainId: 56,
    shortName: "BNB",
    chain: "BNB",
    network: "mainnet",
    networkId: 56,
    icon: "/images/home2.0/coin-icons/bnb.svg",
  },
  {
    name: "Binance Testnet",
    chainId: 97,
    shortName: "BNB Testnet",
    chain: "BNB",
    network: "mainnet",
    networkId: 56,
    icon: "/images/home2.0/coin-icons/bnb.svg",
  },
  {
    name: "Ethereum",
    chainId: 1,
    shortName: "ETH",
    chain: "ETH",
    networkId: 1,
    icon: "/images/home2.0/purple-ethereum.svg",
  },

  {
    name: "Roburna",
    chainId: 156,
    shortName: "RBA",
    chain: "RBA",
    network: "mainnet",
    networkId: 156,
    icon: "/images/home2.0/roburna-blockchain.svg",
  },
  {
    name: "Solana",
    chainId: 101,
    shortName: "SOL",
    chain: "SOL",
    network: "mainnet",
    networkId: 101,
    icon: "/images/home2.0/solana.svg",
  },
];

export const getChainByChainId = (chainId: number | undefined | string) => {
  if (!chainId) return chains[0];
  const numChain = Number(chainId);
  console.log({ numChain });
  return chains.find((chain) => chain.chainId === numChain) || chains[0];
};
