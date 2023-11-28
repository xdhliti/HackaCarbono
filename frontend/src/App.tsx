import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { Contract, ethers } from "ethers";
import { AppBar, Container, Toolbar, Typography, CssBaseline, TextField, Button } from '@mui/material';
import abi from './utils/abiCarbonNFT.json'; 


declare global {
  interface Window{
    ethereum?: any
  }
}

export function App() {


  const [addressWallet, setAddressWallet] = useState('');

  const contratoAbi = abi.abi;

  const CONTRACT_ADDRESS = "0x944cBcF8A01e1F9CbeB2cF09A416C59ae36d087A";
  const [error, setError] = useState('');
  const [tokenId, setTokenId] = useState(0);
  const [hasNFT, setHasNFT] = useState(false);
  const [contract, setContract] = useState<Contract>();
  const [isConnected, setIsConnected] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleOnClickGetNFT = async () => {
    try {
      if (contract === undefined) {
        throw Error("Contract not defined");
      }
      await contract.mint();
      const newTokenId = await contract.getNextId()
      setTokenId(newTokenId);
      setHasNFT(true);
    } catch (err: unknown) {
      setError((err as Error).message);
    }
  }


  const handleOnClickConnect = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum, "sepolia")
      const signer = await provider.getSigner();
      const address = signer.getAddress();
      const contract_temp = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      const walletBalance = await contract_temp.balanceOf(address);

      if (walletBalance != 0) {
        const tokenIdNew = await contract_temp.getTokenIdByOwnerAddress()
        setTokenId(tokenIdNew);
      }
    
      setHasNFT(walletBalance != 0);
      setContract(contract_temp);
      setIsConnected(true);
      setIsLoading(false);
    } catch (err: unknown) {
      setError((err as Error).message);
    }
  }

  useEffect(() => {
    if (!window.ethereum) {
      return setError(`Baixe a extensão do MetaMask para pegar sua NFT!`);
    } else if(window.ethereum?._state?.accounts?.length > 0){
      handleOnClickConnect()
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="wrapper"></div>
  );
}
