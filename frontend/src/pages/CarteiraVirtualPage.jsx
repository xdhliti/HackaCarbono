// src/pages/DoacoesSustentaveisPage.js
import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';
import {Link } from "react-router-dom";

import "./DoacoesSustentaveisPage.css"

const CarteiraVirtualPage = () => {

  return (
    <>
    <div class="fundo">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div class="opcoes">
        <Link to="/perfil">
        <button class="botoes">Dados pessoais</button>
        </Link>
        <Link to="/carteiraVirtual">
        <button class="botoes">Carteira virtual</button>
        </Link>
    </div>

    </div>
    <Footer></Footer>
</>
  );
}

export default CarteiraVirtualPage;