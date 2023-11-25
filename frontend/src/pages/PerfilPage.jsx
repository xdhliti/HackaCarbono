import React from 'react';
import Footer from '../components/Footer/Footer';
import {Link } from "react-router-dom";

import "./PerfilPage.css"

const PerfilPage  = ({nome, email, telefone, senha}) => {

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
            <div class="dados-pessoais">
                <h1>Olá {nome}!!!</h1>
                <h1>Nome:</h1>
                <h1>{nome}</h1>
                <h1>Email:</h1>
                <h1>{email}</h1>
                <h1>Telefone:</h1>
                <h1>{telefone}</h1>   
                <h1>Senha:</h1>
                <h1>{senha}</h1>
            </div>
            </div>
            <Footer></Footer>
        </>
    );
  }
  
  export default PerfilPage;