import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';
import ProdutoCredito from '../components/ProdutoCredito/ProdutoCredito';
import {Link } from "react-router-dom";

import "./FaleConoscoPage.css"

const ModoCompradorPage = () => {

    return (
        <>
            <ProdutoCredito></ProdutoCredito>
            <Footer></Footer>
        </>
    );
  }
  
  export default ModoCompradorPage;