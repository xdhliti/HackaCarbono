// src/pages/DoacoesSustentaveisPage.js
import React, { useState } from 'react';
import {Link } from "react-router-dom";

const DescricaoPage = () => {

  return (
    <>
    <div class="descrição-lado-esqeurdo">
        <h1/>Crédito de carbono<h1/>
        <img src="../../../public/imagemLogin.jpg" alt="foto de arvore" />
    </div>
    <div class='descricao-lado-direito'>
        <h1>Crédito de carbono de 25 propriedades diferentes</h1>
        <p>Comprando esses créditos de carbono você estará não apenas colaborando com o meio ambiente mais também favorecendo pequenos e médios proprietários nessa área.</p>
        <Link to="/nft">
        <button class="btn btn-primary">Comprar</button>
        </Link>
    </div>
    </>
  );
}

export default DescricaoPage;