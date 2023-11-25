import { useState } from 'react'
import React from 'react'

import './Footer.css'

function Footer() {

  return (
    <>
    <footer class="footer-bg">
    <div class="container"/>
        <div class="row"/>
            <div class="esquerda">
                <br/> <br/> <br/> <br/> <br/> <br/>
                <h3>Sobre Nós</h3> <br/> 
                <p2>Somos um grupo formado para desenvolver um projeto inovador com o objetivo de participar do hackthon interno do grupo da POLI-USP, PoliChain.</p2> 
            </div>
              <div class="direita">
                <br/> <br/> <br/>
                <h3>Contato</h3> <br/>
                <p2><strong>Endereço:</strong> 123 Rua da Amostra, Cidade, País</p2> <br/> <br/>
                <p2><strong>Telefone:</strong> +1 (123) 456-7890</p2> <br/> <br/>
                <p2><strong>Email:</strong> contato@exemplo.com</p2> <br/><br/><br/>
                <img src="../../../public/images/imagemPoli.png" class="image-fluid" alt="imagem poli" />
            </div>
    </footer>
    </>
  )
};

export default Footer;

