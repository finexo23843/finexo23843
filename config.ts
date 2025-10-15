import { http, createConfig } from 'wagmi'
import { base, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = '<WALLETCONNECT_PROJECT_ID>'

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [mainnet.id]: https://eth-mainnet.g.alchemy.com/v2/R5PWuPGjkkf5iVhcgGUVP(),
    [base.id]: https://eth-mainnet.g.alchemy.com/v2/R5PWuPGjkkf5iVhcgGUVP(),
  },
})
