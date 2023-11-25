import React from 'react';
import Footer from '../components/Footer/Footer';
import {Link } from "react-router-dom";

import "./LoginPage.css"



const LoginPage = () => {

    return (
        <>
        <div class="imagem-fundo-2">
        <div class="container mt-4">
        <br></br>
                <h1 class="text-center text-light">LOGIN</h1>
                <p class="text-center text-light">Para realizar seu login preencha os campos abaixo:</p>

                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <form>
                            <div class="mb-3">
                                <label for="nome" class="form-label text-light">Nome:</label>
                                <input type="text" class="form-control" id="nome" placeholder="Seu Nome"/>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label text-light">Email:</label>
                                <input type="email" class="form-control" id="email" placeholder="Seu Email"/> 
                            </div>
                            <div class="mb-3">
                                <label for="telefone" class="form-label text-light">Telefone</label>
                                <input type="number" class="form-control" id="nome" placeholder="Seu telefone"/>
                            </div>
                            <div class="mb-3">
                                <label for="senha" class="form-label text-light">Senha:</label>
                                <input type="password" class="form-control" id="email" placeholder="Sua senha"/> 
                            </div>
                            <Link to="/perfil">
                            <button type="submit" class="btn btn-primary" href="./PerfilPage.jsx" >Logar</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
            <Footer></Footer>
        </>
    );
  }
  
  export default LoginPage;