import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';
import ProdutoCredito from '../components/ProdutoCredito/ProdutoCredito';
import {Link } from "react-router-dom";
import "./ModoCompradorPage.css"

import "./FaleConoscoPage.css"

const ModoCompradorPage = () => {

    return (
        <>
        <div class="produtos">
            <ProdutoCredito nome="CRÉDITO DE CARBONO DE 1000he" imagem="../../../public/images/imagemLogin.jpg"/> 
            <ProdutoCredito nome="CRÉDITO DE CARBONO DE 500he" imagem="../../../public/images/imagemLogin.jpg"/> 
            <ProdutoCredito nome="CRÉDITO DE CARBONO DE 2000he" imagem="../../../public/images/imagemLogin.jpg"/> 
            <ProdutoCredito nome="CRÉDITO DE CARBONO DE 1000he" imagem="../../../public/images/imagemLogin.jpg"/> 
        </div>
            <Footer></Footer>
        </>
    );
  }
  
  export default ModoCompradorPage;