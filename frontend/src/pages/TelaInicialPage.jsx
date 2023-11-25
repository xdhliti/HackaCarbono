import React from 'react';
import CarrosselDeImagens from '../components/CarrosselDeImagens/CarrosselDeImagens';
import Footer from '../components/Footer/Footer';

import "./TelaInicialPage.css"

function TelaInicialPage() {
  return (
    <>
      <CarrosselDeImagens></CarrosselDeImagens>

      <div class="Texto-inicial">
        <h1><strong>NO QUE PODEMOS TE AJUDAR?</strong></h1>
        <h2>
          Este site foca em resolver os problemas formulados nas perguntas acima, utilizando tecnologias modernas de blockchain para transações seguras entre indivíduos e empresas.
        </h2>
        <br></br> <br></br>

      <section >
        <h1>NOSSOS SERVIÇOS</h1>
        <br></br>
        <div class="service">
          <h3>Crédito de Carbono</h3>
          <p>
            Quer comprar ou vender créditos de carbono de modo fácil e seguro? Utilize nossa plataforma e nossa criptomoeda especializada para realizar todo o processo de modo mais objetivo possível.
            Além disso, nossa plataforma oportuniza venda de créditos coletivos, barateando taxa para os produtores e consumidores…
          </p>
        </div>

        <div class="service">
          <h3>Bolsa Verde</h3>
          <p>
            Quer investir em empresas que defendam suas ideias sustentáveis mais não sabe por onde começar? Aqui estão listadas algumas empresas e alguns de seus feitos para poder tomar uma decisão mais consciente…
          </p>
        </div>

        <div class="service">
          <h3>Doações Sustentáveis</h3>
          <p>
            Pode fazer uma doação para ajudar pequenos e médios produtores alimentícios, mas não encontra plataformas seguras? Nessa aba pode fazer o tamanho da doação que quiser utilizando ou não nossa criptomoeda…
          </p>
        </div>
      </section>
      </div>
      <Footer></Footer>
      </>
  );
}

export default TelaInicialPage;