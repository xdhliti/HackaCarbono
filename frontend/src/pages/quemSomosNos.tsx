// src/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <header>
        <h1>QUEM SOMOS NÓS?</h1>
        <h2>SOBRE NÓS</h2>
        <p>
          Somos estudantes de Engenharia Elétrica da Escola Politécnica da USP, membros do Polichain, grupo de extensão focado em estudar a tecnologia Blockchain. Estamos participando de um Hackathon interno com o objetivo de desenvolver um MVP que incorpore a tecnologia estudada.
        </p>
      </header>

      <section>
        <h2>NOSSO OBJETIVO</h2>
        <p>
          É implementar uma solução que utilize blockchain que facilite a compra e venda de créditos de carbono para pequenos e médios proprietários, facilitar as doações para pequenas empresas alimentícias e conscientizar os usuários sobre empresas e ações sustentáveis.
        </p>
      </section>

      <section>
        <img src="./../../public/images/imagemQuemNosSomos.jpg" alt="Descrição da Imagem 1" />
      </section>
    </div>
  );
}

export default AboutUs;
