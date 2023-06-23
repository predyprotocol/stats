import React from 'react'
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query'
import { Web3ReactProvider } from '@web3-react/core'
import App from './App'
import { metaMask, hooks } from './connectors'
import './index.css'

const queryClient = new QueryClient()

const root = createRoot(document.getElementById('root')!)

root.render(<React.StrictMode>
  <Web3ReactProvider connectors={[[metaMask, hooks]]}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Web3ReactProvider>
</React.StrictMode>)