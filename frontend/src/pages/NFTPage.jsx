import { useEffect, useState, Text } from 'react';
import { Contract, ethers } from "ethers";
import { Button } from '@mui/material';
import "./NFTPage.css";
import CONTRACT_ABI from '../abi.json';



function NFTPage() {
  const CONTRACT_ADDRESS = "0xB060DCA1833D3788C0cDAcb8726965Ef84F838B5";
  const [error, setError] = useState('');
  const [tokenId, setTokenId] = useState(0);
  const [hasNFT, setHasNFT] = useState(false);
  const [contract, setContract] = useState();
  const [isConnected, setIsConnected] = useState(false);
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
    } catch (err) {
      setError((err).message);
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
    } catch (err) {
      setError((err).message);
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
    <div className="App" >
      {((!isConnected && !isLoading) || (isConnected && !isLoading && !hasNFT)) && <Text>Compre a NFT</Text>}
      {(isConnected && !isLoading && hasNFT) &&  <Text>Parabens</Text>}
      {(!isLoading && hasNFT) && <Text>Contrato: {CONTRACT_ADDRESS} | Id: {tokenId.toString()}</Text>}
      {(!hasNFT && isConnected && !isLoading) && <Button disabled={hasNFT} onClick={handleOnClickGetNFT}>Comprar meu NFT</Button>}
      {(!isConnected && !isLoading) && <Button disabled={isConnected} onClick={handleOnClickConnect}>Conectar Carteira</Button>}
      <Text>{error}</Text>
    </div>
  )
}

export default NFTPage;