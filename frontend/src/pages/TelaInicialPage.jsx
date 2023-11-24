import React from 'react';

function TelaInicialPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sustentabilidade para o Futuro</h1>
        <p>Perguntas:</p>
        <ul>
          <li>Qual é o futuro da sustentabilidade?</li>
          <li>Como resolver o problema da poluição em uma realidade de centralização econômica?</li>
          <li>Como incentivar uma produção mais sustentável e mais natural de alimentos?</li>
          <li>Como investir em empresas que prezam por ideais sustentáveis?</li>
        </ul>
        <p><strong>NO QUE PODEMOS TE AJUDAR?</strong></p>
        <p>
          Este site foca em resolver os problemas formulados nas perguntas acima, utilizando tecnologias modernas de blockchain para transações seguras entre indivíduos e empresas.
        </p>
      </header>

      <section className="services">
        <h2>Nossos Serviços</h2>

        <div className="service">
          <h3>Crédito de Carbono</h3>
          <p>
            Quer comprar ou vender créditos de carbono de modo fácil e seguro? Utilize nossa plataforma e nossa criptomoeda especializada para realizar todo o processo de modo mais objetivo possível.
            Além disso, nossa plataforma oportuniza venda de créditos coletivos, barateando taxa para os produtores e consumidores…
          </p>
        </div>

        <div className="service">
          <h3>Bolsa Verde</h3>
          <p>
            Quer investir em empresas que defendam suas ideias sustentáveis mais não sabe por onde começar? Aqui estão listadas algumas empresas e alguns de seus feitos para poder tomar uma decisão mais consciente…
          </p>
        </div>

        <div className="service">
          <h3>Doações Sustentáveis</h3>
          <p>
            Pode fazer uma doação para ajudar pequenos e médios produtores alimentícios, mas não encontra plataformas seguras? Nessa aba pode fazer o tamanho da doação que quiser utilizando ou não nossa criptomoeda…
          </p>
        </div>
      </section>
    </div>
  );
}

export default TelaInicialPage;