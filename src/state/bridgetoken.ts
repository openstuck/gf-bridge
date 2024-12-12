import { atom } from "jotai";

export const bridgedToken = atom({
  chainId: 156,
  address: "string",
  amount: "0",
  receiver: "0x0000000000000000000000000000000000000000",
  toChain: "number",
  toAddress: "0x0000000000000000000000000000000000000000",
  receiveAmount: "0",
});
