// src/pages/DoacoesSustentaveisPage.js
import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';
import {Link } from "react-router-dom";

import "./CreditoDeCarbonoPage.css"

const CreditoDeCarbonoPage = () => {

  return (
    <div>
        <br></br>
        <br></br>
        <h1 class="introducao-carbono">CRÉDITO DE CARBONO</h1>
        <p class="introducao-carbono"> Como funciona a dinamica de crédito de carbono em nosso site...</p>
        
        <img src="../../../public/images/imagemCreditoCarbono.jpg" alt="explicação do crédito de carbono" />

        <div class="botoes">
        <Link to="/modoComprador">
        <button class="btn btn-primary">Modo comprador</button>
        </Link>
        <Link to="/login">
        <button class="btn btn-primary">Modo vendedor</button>
        </Link>
        </div>
        
        <br></br>
        <br></br>
        <br></br>
        <Footer></Footer>
    </div>
  );
}

export default CreditoDeCarbonoPage;
