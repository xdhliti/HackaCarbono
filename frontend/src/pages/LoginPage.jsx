import React from 'react';

import FormDeContato from "../components/Login/Login.jsx"

const LoginPage = () => {

    return (
        <>
        <div class="container mt-4">
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
                            <button type="submit" class="btn btn-primary" href="./PerfilPage.jsx">Logar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default LoginPage;