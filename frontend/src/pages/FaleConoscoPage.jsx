import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';

import "./FaleConoscoPage.css"

const FaleConoscoPage = () => {

    return (
        <>
        <div class="imagem-fundo-1">
            <div class="container mt-4">
            <br></br>
            <br></br>
                <h1 class="text-center text-light">Formulário de comentários</h1>
                <p class="text-center text-light">Por favor, omplete o formulário abaixo para nos enviar algum comentário.</p>

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
                                <label for="assunto" class="form-label text-light">Assunto:</label>
                                <select class="form-select" id="assunto">
                                    <option value="opcao0"></option>
                                    <option value="opcao1">Informações adicionais</option>
                                    <option value="opcao2">Sugestões</option>
                                    <option value="opcao3">Reclamações</option>
                                    <option value="opcao4">Outros</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="comentario" class="form-label text-light">Comentário:</label>
                                <textarea class="form-control" id="comentario" rows="4" placeholder="Seu comentário"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Enviar Reclamação</button>
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
            </div>
            <Footer></Footer>
        </>
    );
  }
  
  export default FaleConoscoPage;