import { http, createConfig } from "@wagmi/core";
import { bscTestnet } from "@wagmi/core/chains";
import { walletConnect } from "@wagmi/connectors";

export const config = createConfig({
  chains: [bscTestnet],
  connectors: [
    walletConnect({
      projectId: "a23458cac080f2a148df2379612e55c3",
    }),
  ],
  transports: {
    [bscTestnet.id]: http(),
  },
});
