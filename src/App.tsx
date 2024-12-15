import "./App.css";
import Footer from "./layouts/Footer";
import { Header } from "./layouts/Header";

import { createAppKit } from "@reown/appkit/react";
import { Ethers5Adapter } from "@reown/appkit-adapter-ethers5";
import { mainnet, bsc, bscTestnet } from "@reown/appkit/networks";

import { roburnaNetwork, roburnaTestnetNetwork } from "./config/network";
import { projectId, metadata } from "./config/walletconnect";
import BridgeCard from "./bridge/components/BridgeCard";

createAppKit({
  adapters: [new Ethers5Adapter()],
  metadata: metadata,
  networks: [mainnet, bsc, bscTestnet, roburnaNetwork, roburnaTestnetNetwork],
  projectId,
  features: {
    analytics: false,
    onramp: false,
    email: false,
    socials: [],
    swaps: false,
  },
  chainImages: {
    97: "https://raw.githubusercontent.com/openstuck/gf-bridge/9f33e171d5b891397c883a3617b9c88e809c6342/public/images/home2.0/coin-icons/bnb.svg",
    158: "https://raw.githubusercontent.com/openstuck/gf-bridge/9f33e171d5b891397c883a3617b9c88e809c6342/public/images/home2.0/roburna-blockchain.svg",
    159: "https://raw.githubusercontent.com/openstuck/gf-bridge/9f33e171d5b891397c883a3617b9c88e809c6342/public/images/home2.0/roburna-blockchain.svg",
  },
});

function App() {
  return (
    <>
      <Header></Header>
      <div
        style={{
          padding: "50px 0",
        }}
      >
        <BridgeCard></BridgeCard>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
