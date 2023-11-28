import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { AppBar, Container, Toolbar, Typography, CssBaseline } from '@mui/material';
import abi from './utils/abiCC.json'; 


export function App() {

  const contratoAbi = abi.abi;
  console.log(contratoAbi);
  const contratoEndereco = '0x5FbDB2315678afecb367f032d93F64';



  
  const handleBuyCreditos = async () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contrato = new ethers.Contract(contractAddress, contractABI, signer);
    await contrato.makeMint(1); // Compra 1 CreditosCarbono, você pode ajustar a quantidade conforme necessário
  };

  return (
    <div style={{ height: '100vh' }}>
      <CssBaseline />
      <AppBar position="sticky" sx={{ backgroundColor: 'green' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Carteira e Transações
          </Typography>
          <ConnectButton />
        </Toolbar>
      </AppBar>

      <Container sx={{ paddingTop: '64px'  }}>
        {/*<Button variant="contained" onClick={handleBuyCreditos}>
          Comprar CreditosCarbono
  </Button>*/}
      </Container>     
    </div>
  );
}
