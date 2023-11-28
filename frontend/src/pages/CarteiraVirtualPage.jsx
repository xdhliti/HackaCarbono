// src/pages/DoacoesSustentaveisPage.js
import React from 'react';
import Footer from '../components/Footer/Footer';
import {Link } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Account }  from '../components/wagmi-examples/Account'
import { Balance, AccountBalance, FindBalance }  from '../components/wagmi-examples/Balance'
import { useEffect, useState } from 'react';
import "./CarteiraVirtualPage.css";


const CarteiraVirtualPage = () => {


  return (
    <>
      <div class="backgroundUser">

            <div class="opcoes">
                <Link to="/perfil">
                <button className="ButtonDados">Dados pessoais</button>
                </Link>
                <Link to="/carteiraVirtual">
                <button class="ButtonDados">Carteira virtual</button>
                </Link>
            </div>
            <div className="walletButton">
                    <ConnectButton />
            </div>
      </div>
    <Footer></Footer>
</>
  );
}

export default CarteiraVirtualPage;