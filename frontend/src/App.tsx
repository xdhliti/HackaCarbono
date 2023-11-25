import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { AppBar, Container, Toolbar, Typography, CssBaseline, useTheme } from '@mui/material';

export function App() {
  const theme = useTheme();

  return (
    <div style={{ backgroundColor: theme.palette.background.default, height: '100vh' }}>
      <CssBaseline />
      <AppBar position="sticky" sx={{ backgroundColor: 'green' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Carteira e Transações
          </Typography>
          <ConnectButton />
        </Toolbar>
      </AppBar>

      <Container sx={{ paddingTop: '64px', backgroundColor: theme.palette.background.default }}>
      </Container>     
    </div>
  );
}
