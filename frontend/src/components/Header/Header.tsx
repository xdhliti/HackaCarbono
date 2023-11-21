import { useState } from 'react'
import { Link } from 'react-router-dom';

import './Header.css'

function Header() {

  return (
    <>
      <nav>
      <img src="../../../public/images/Header.png" alt="Imagem no header" />
      <ul>
        <li>
          <Link to="/">TELA INICIAL</Link>
        </li>
        <li>
          <Link to="/sobreNos">SOMOS NÓS?</Link>
        </li>
        <li>
          <Link to="/oQueEBlockchain">O QUE É <br></br>BLOCKCHAIN?</Link>
        </li>
        <li>
          <Link to="/creditoDeCarbono">CRÉDITO<br></br> DE CARBONO</Link>
        </li>
        <li>
          <Link to="/bolsaVerde">BOLSA VERDE</Link>
        </li>
        <li>
          <Link to="/doacoesSustentaveis">DOAÇÕES<br></br> SUSTENTÁVEIS</Link>
        </li>
        <div className="perfil">
          <Link to="/login">LOGIN</Link>
        </div>
      </ul>
    </nav>
    </>
  )
}

export default Header;
