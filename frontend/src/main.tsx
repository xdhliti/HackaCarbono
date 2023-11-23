import '@rainbow-me/rainbowkit/styles.css'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { WagmiConfig } from 'wagmi'
import { ThemeProvider } from '@mui/material/styles';
import { App } from './App'
import { chains, config } from './wagmi'
import defaultTheme from './theme'
import Header from './components/Header/Header'
import UserPage from './pages/UserPage/UserPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
          <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
)
