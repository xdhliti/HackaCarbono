import React from 'react';
import Footer from '../components/Footer/Footer';
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Button from "../components/Button";

import "./PerfilPage.css"

const PerfilPage  = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();    

    return (
        <>
        <div class="fundo">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="lado">
        <div class="opcoes">
            <Link to="/carteiraVirtual">
            <button class="ButtonDados">Carteira virtual</button>
            </Link>
            <Link to="/">
            <button class="ButtonDados">Sair</button>
            </Link>
        </div>
        </div>
        </div>
        <Footer></Footer>
        </>
    );
  }
  
  export default PerfilPage;