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