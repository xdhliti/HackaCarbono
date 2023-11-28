import React from 'react';
import {Link } from "react-router-dom";

import "./ProdutoCredito.css";

const ProdutoCredito = ({ nome, imagem }) => {
  return (
    <div class="quadrado">
      <h1 class="texto">{nome}</h1>
      <img class="imagem" src={imagem} alt="Foto de árvore" />
      <Link to="/descricao">
      <button class="btn btn-primary">Mais informações</button>
      </Link>
    </div>
  );
}

export default ProdutoCredito;
