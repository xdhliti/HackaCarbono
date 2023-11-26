import React from 'react';
import Footer from '../components/Footer/Footer';

import "./QuemSomosNosPage.css"

const QuemSomosNosPage = () => {

  return (
    <>
    <h1 class="titulo">QUEM SOMOS NÓS?</h1>
    <div class="imagemConteudo">
        <div class="textoSobre">
        <h2>SOBRE NÓS</h2>
        <p>
          Somos estudantes de Engenharia Elétrica da Escola Politécnica da USP, membros do Polichain, grupo de extensão focado em estudar a tecnologia Blockchain. Estamos participando de um Hackathon interno com o objetivo de desenvolver um MVP que incorpore a tecnologia estudada.
        </p>
        </div>


        <div class="textoObjetivo">
        <h2>NOSSO OBJETIVO</h2>
        <p>
          É implementar uma solução que utilize blockchain que facilite a compra e venda de créditos de carbono para pequenos e médios proprietários, facilitar as doações para pequenas empresas alimentícias e conscientizar os usuários sobre empresas e ações sustentáveis.
        </p>
        </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default QuemSomosNosPage;
