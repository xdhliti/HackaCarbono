import { ConnectButton } from '@rainbow-me/rainbowkit'
import { AppBar, Container, Toolbar, Typography, CssBaseline, useTheme } from '@mui/material'
import { ContractInteractionList } from './components/ContractInteractionList'

export function ConnectWall() {
  const theme = useTheme();
  
  return (
    <div style={{ width: '160px',display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ConnectButton />
    </div>
  )
}
