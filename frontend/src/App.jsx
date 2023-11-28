import React, { useState } from 'react';
import { ethers } from 'ethers';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { AppBar, Container, Toolbar, Typography, CssBaseline, TextField, Button } from '@mui/material';
import abi from './utils/abiCC.json'; 


export function App() {


  const [addressWallet, setAddressWallet] = useState('');

  const contratoAbi = abi.abi;
  const contratoEndereco = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

  const handleAddressChange = (event) => {
    setAddressWallet(event.target.value);
  };

  
  const handleBuyCreditos = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Garanta que possua a Metamask instalada!");
        return;
      }

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contrato = new ethers.Contract(contratoEndereco, contratoAbi, signer);
      await contrato.makeMint(1); // Compra 1 CreditosCarbono, você pode ajustar a quantidade conforme necessário

    } catch (error) {
      console.log(error);
    }
    
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
           {/*<TextField
              label="Endereço da Carteira"
              variant="outlined"
              value={addressWallet}
              onChange={handleAddressChange}
              style={{ marginBottom: '16px' }}
            />
            <Button variant="contained" onClick={handleBuyCreditos}>
              Comprar CreditosCarbono
            </Button>
            */}  
            <TextField
              label="Endereço da Carteira"
              variant="outlined"
              value={addressWallet}
              onChange={handleAddressChange}
              style={{ marginBottom: '16px' }}
            />
            <Button variant="contained" onClick={handleBuyCreditos}>
              Comprar CreditosCarbono
            </Button>
  </Container>   
    </div>
  );
}
