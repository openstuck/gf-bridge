import { defineChain } from "@reown/appkit/networks";

// Define the custom network
export const roburnaNetwork = defineChain({
  id: 158,
  caipNetworkId: "eip155:158",
  chainNamespace: "eip155",
  name: "Roburna",
  nativeCurrency: {
    decimals: 18,
    name: "RBA",
    symbol: "RBA",
  },
  rpcUrls: {
    default: {
      http: ["https://dataseed.roburna.com"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://rbascan.com/" },
  },
  contracts: {
    // Add the contracts here
  },
});

export const roburnaTestnetNetwork = defineChain({
  id: 159,
  caipNetworkId: "eip155:159",
  chainNamespace: "eip155",
  name: "Roburna Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "RBAT",
    symbol: "RBAT",
  },
  rpcUrls: {
    default: {
      http: ["https://preseed-testnet-1.roburna.com/"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://testnet.rbascan.com/" },
  },
  contracts: {
    // Add the contracts here
  },
});
