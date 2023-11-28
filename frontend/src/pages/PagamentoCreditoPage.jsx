import React from 'react';
import Footer from '../components/Footer/Footer';
import {Link } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';

import "./DoarPage.css"

const PagamentoCreditoPage = () => {
 
    return (
        <>
        <br></br>
        <br></br> 
        <h1 class="central"> Pagamento </h1>
        <div class="central">
        <ConnectButton />
        </div>
        <Link to="/creditoDeCarbono" class="link">
        <button class="btn btn-primary" align="center">Pagar</button>
        </Link>
        <Footer></Footer>
        </>
    );
  }
  
  export default PagamentoCreditoPage;