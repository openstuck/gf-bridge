export type BridgedToken = {
  chainId: number;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
};

const TokenImage = {
  ETH: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
  BNB: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png",
  USDT: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
  USDC: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
};

export const bridgedTokens: BridgedToken[] = [
  // {
  //   chainId: 1,
  //   address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  //   name: "Ether",
  //   symbol: "ETH",
  //   decimals: 18,
  //   logoURI: TokenImage.ETH,
  // },
  {
    chainId: 1,
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    name: "Tether",
    symbol: "USDT",
    decimals: 6,
    logoURI: TokenImage.USDT,
  },
  // {
  //   chainId: 1,
  //   address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
  //   name: "Binance Coin",
  //   symbol: "BNB",
  //   decimals: 18,
  //   logoURI: TokenImage.BNB,
  // },
  {
    chainId: 1,
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    logoURI: TokenImage.USDC,
  },
  // {
  //   chainId: 56,
  //   address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
  //   name: "Ether",
  //   symbol: "ETH",
  //   decimals: 18,
  //   logoURI: TokenImage.ETH,
  // },
  {
    chainId: 56,
    address: "0xDD534480782eCf53e4A5257B0f3C37702A0bAD61",
    name: "Tether",
    symbol: "USDT",
    decimals: 18,
    logoURI: TokenImage.USDT,
  },
  // {
  //   chainId: 56,
  //   address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  //   name: "Binance Coin",
  //   symbol: "BNB",
  //   decimals: 18,
  //   logoURI: TokenImage.BNB,
  // },
  {
    chainId: 56,
    address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
    name: "USD Coin",
    symbol: "USDC",
    decimals: 18,
    logoURI: TokenImage.USDC,
  },
  {
    chainId: 158,
    address: "0xF183CbD16ca8C4ebc5c51908Fd92EbB89De687C7",
    name: "Tether",
    symbol: "USDT",
    decimals: 18,
    logoURI: TokenImage.USDT,
  },
  // {
  //   chainId: 56,
  //   address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  //   name: "Binance Coin",
  //   symbol: "BNB",
  //   decimals: 18,
  //   logoURI: TokenImage.BNB,
  // },
  {
    chainId: 158,
    address: "0x21F2fb5De15Ab4f2101023698355D27403bdB543",
    name: "USD Coin",
    symbol: "USDC",
    decimals: 18,
    logoURI: TokenImage.USDC,
  },
  {
    chainId: 159,
    address: "0x3ef19D1142b00084D16df47eeC633bc3134dC359",
    name: "Tether",
    symbol: "USDT",
    decimals: 18,
    logoURI: TokenImage.USDT,
  },
  // {
  //   chainId: 56,
  //   address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  //   name: "Binance Coin",
  //   symbol: "BNB",
  //   decimals: 18,
  //   logoURI: TokenImage.BNB,
  // },
  {
    chainId: 159,
    address: "0x920eA5477482bCcC901a0D47ab302Fd2ea803C6a",
    name: "USD Coin",
    symbol: "USDC",
    decimals: 18,
    logoURI: TokenImage.USDC,
  },
];

export const getBridgedTokens = (
  chainId: number | string | undefined
): BridgedToken[] => {
  if (!chainId) chainId = 1;
  const numChain = Number(chainId);
  return bridgedTokens.filter((token) => token.chainId === numChain);
};

export const getTokenImage = (chainId: number, address: string) => {
  const token = getBridgedTokens(chainId).find((t) => t.address === address);
  return token ? token.logoURI : TokenImage.USDT;
};

export const getTokenSymbol = (chainId: number, address: string) => {
  const token = getBridgedTokens(chainId).find((t) => t.address === address);
  return token ? token.symbol : "USDT";
};

export const getTokenDecimals = (chainId: number, address: string) => {
  const token = getBridgedTokens(chainId).find((t) => t.address === address);
  return token ? token.decimals : 18;
};
