import React from 'react';
import Footer from '../components/Footer/Footer';
import {Link } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';

import "./PerfilPage.css"

const PerfilPage = () => {

    return (
        <>
            <div class="fundo">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class="opcoes">
                <Link to="/dadosPessoais">
                <button className="ButtonDados">Dados pessoais</button>
                </Link>
                <div className="walletButton">
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
  
  export default PerfilPage;