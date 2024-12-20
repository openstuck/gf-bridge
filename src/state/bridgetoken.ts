import { atom } from "jotai";

export const bridgedToken = atom({
  chainId: 158,
  address: "0x",
  amount: "0",
  formattedAmount: "0",
  receiver: "0x0000000000000000000000000000000000000000",
  toChain: "1",
  toAddress: "0x0000000000000000000000000000000000000000",
  receiveAmount: "0",
  formattedReceiveAmount: "0",
});
