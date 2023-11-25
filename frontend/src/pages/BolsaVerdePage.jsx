import React from 'react';
import Footer from '../components/Footer/Footer';

import "./BolsaVerdePage.css"

const BolsaVerdePage = () => {

  return (
    <div>
      <div class="esquerda">
        <h1 class="introducao-bolsa">BOLSA VERDE</h1>
        <p class="introducao-bolsa"> Aqui mostramos uma lista de empresas que possuem ações sustentáveis, para investir sem causar impactos no meio ambiente.</p>
      </div>
      <div class="direita">
        <h1 class ="sujestoes">Empresas Sustentáveis</h1>
        <h2 class ="sujestoes"> Arezzo</h2>
        <p class ="sujestoes"> 60% de materiais sustentáveis em todos os produtos. 100% das embalagens são feitas com materiais sustentáveis. Implantação de logística reversa em 100% das lojas próprias e franquias nacionais. Redução de 30% das emissões.</p>
        <h2 class ="sujestoes"> Ergue</h2>
        <h2 class ="sujestoes"> Amazon</h2>
        <h2 class ="sujestoes"> Apple</h2>
        <h2 class ="sujestoes"> Fleury</h2>
        <h2 class ="sujestoes"> BTG Pactual</h2>
        <h2 class ="sujestoes"> Nubank</h2>
        <h2 class ="sujestoes"> Netflix</h2>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default BolsaVerdePage;
