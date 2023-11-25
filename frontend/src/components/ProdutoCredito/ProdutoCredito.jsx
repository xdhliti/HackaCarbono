import React from 'react';
import {Link } from "react-router-dom";

import "./ProdutoCredito.css";

const ProdutoCredito = ({ nome, imagem }) => {
  return (
    <div className="quadrado">
      <h1 class="texto">{nome}</h1>
      <img className="imagem" src={imagem} alt="Foto de árvore" />
      <Link to="/descricao">
      <button className="btn btn-primary">Mais informações</button>
      </Link>
    </div>
  );
}

export default ProdutoCredito;
