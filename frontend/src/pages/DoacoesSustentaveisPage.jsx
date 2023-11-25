import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';
import {Link } from "react-router-dom";

import "./DoacoesSustentaveisPage.css"

const DoacoesSustentaveisPage = () => {

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
        <h1 class="central">DOAÇÕES SUSTENTÁVEIS</h1>
        <p class="central-texto"> Nessa aba, você pode fazer doações seguras para ajudar pequenos e médios produtores alimentícios. A incorporação de blockchain nesse contexto pode trazer uma série de benefícios, incluindo transparência, rastreabilidade e eficiência nas transações.</p>
        <br></br>
        <br></br>
        <h1 class="central">QUANTO JÁ RECEBEMOS ATÉ AGORA</h1>
        <p class="central-texto"></p>
        <br></br>
        <div class="botao">
        <Link to="/doar">
        <button class="btn btn-primary">Doar</button>
        </Link>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default DoacoesSustentaveisPage;
