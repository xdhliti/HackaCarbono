import React, { useState } from 'react';
import "./DescricaoPage.css"
import {Link } from "react-router-dom";

const DescricaoPage = () => {

  return (
    <>
    <div className="descricao">
    <div class="descrição-lado-esquerdo">
        <h1/>CRÉDITO DE CARBONO<h1/>
        <img src="../../../public/images/imagemLogin.jpg" alt="foto de arvore" class="imagem" />
    </div>
    <div class='descricao-lado-direito'>
        <h1>Crédito de carbono de 25 propriedades diferentes</h1>
        <p>Comprando esses créditos de carbono você estará não apenas colaborando com o meio ambiente mais também favorecendo pequenos e médios proprietários nessa área.</p>
        <Link to="/pagamentoCredito">
        <button class="btn btn-primary">Comprar</button>
        </Link>
    </div>
    </div>
    </>
  );
}

export default DescricaoPage;