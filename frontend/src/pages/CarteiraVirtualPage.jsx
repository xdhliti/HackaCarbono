// src/pages/DoacoesSustentaveisPage.js
import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';
import {Link } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';

import "./DoacoesSustentaveisPage.css"

const CarteiraVirtualPage = () => {

  return (
    <>
      <div class="fundo">
            <br></br>
            <br></br>
            <br></br>
            <div class="lado">
            <div class="opcoes">
                <Link to="/perfil">
                <button class="ButtonDados">Dados pessoais</button>
                </Link>
                <Link to="/carteiraVirtual">
                <button class="ButtonDados">Carteira virtual</button>
                </Link>
            </div>
            <div class="walletButton">
                    <ConnectButton />
            </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
      </div>
    <Footer></Footer>
</>
  );
}

export default CarteiraVirtualPage;