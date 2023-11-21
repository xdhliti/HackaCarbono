// src/pages/BolsaVerdePage.js
import React from 'react';


const BolsaVerdePage = () => {

  const empresas = [
    {
      nome: 'Arezzo',
      compromisso: '60% de materiais sustentáveis em todos os produtos. 100% das embalagens são feitas com materiais sustentáveis. Implantação de logística reversa em 100% das lojas próprias e franquias nacionais. Redução de 30% das emissões.',
    },
    {
      nome: 'Ergue',
    },
    {
      nome: 'Amazon',
    },
    {
      nome: 'Apple',
    },
    {
      nome: 'Wege',
    },
    {
      nome: 'Fleury',
    },
    {
      nome: 'BTG Pactual',
    },
    {
      nome: 'Nubank',
    },
    {
      nome: 'Netflix',
    },
    // Adicione mais empresas conforme necessário
  ];

  return (
    <div>
      <header>
        <h1>BOLSA VERDE</h1>
        <p>
          Aqui mostramos uma lista de empresas que possuem ações sustentáveis, para investir sem causar impactos no meio ambiente.
        </p>
      </header>

      <section>
        <h2>Empresas Sustentáveis</h2>
        <ul>
          {empresas.map((empresa, index) => (
            <li key={index}>
              <h3>{empresa.nome}</h3>
              <p>{empresa.compromisso}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default BolsaVerdePage;
