import React from 'react';
import Footer from '../components/Footer/Footer';

import "./BolsaVerdePage.css"

const BolsaVerdePage = () => {

  return (
    <>
    <div className="Wrapper">
      <div class="esquerdaDiv">
        <h1 class="introducao-bolsa">BOLSA VERDE</h1>
        <p class="introducao-bolsa"> Aqui mostramos uma lista de empresas que possuem ações sustentáveis, para investir sem causar impactos no meio ambiente.</p>
      </div>
      <div class="direitaDiv">
      <h1 class ="sujestoes">Empresas Sustentáveis</h1>
        <div className="empresas">
          <h3 class ="sujestoes"> Arezzo</h3>
          <p class ="sujestoes"> 60% de materiais sustentáveis em todos os produtos. 100% das embalagens são feitas com materiais sustentáveis. Implantação de logística reversa em 100% das lojas próprias e franquias nacionais. Redução de 30% das emissões.</p>
          <h3 class ="sujestoes"> Ergue</h3>
          <h3 class ="sujestoes"> Amazon</h3>
          <h3 class ="sujestoes"> Apple</h3>
          <h3 class ="sujestoes"> Fleury</h3>
          <h3 class ="sujestoes"> BTG Pactual</h3>
          <h3 class ="sujestoes"> Nubank</h3>
          <h3 class ="sujestoes"> Netflix</h3>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}

export default BolsaVerdePage;
