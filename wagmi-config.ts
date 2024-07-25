import { http, createConfig } from "wagmi";
import { sepolia, base, mainnet, optimism } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

const projectId = "b8549e4cab7ab329eea1b447d497faac";

export const config = createConfig({
  chains: [mainnet, base, sepolia],
  ssr: true,
  connectors: [injected(), walletConnect({ projectId }), metaMask(), safe()],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
    [sepolia.id]: http(),
  },
});
