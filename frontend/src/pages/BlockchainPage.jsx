import React from 'react';
import Footer from '../components/Footer/Footer';

import "./BlockchainPage.css"

const BlockchainPage = () => {

  return (
    <div>
      <header class="texto-1">
        <h1>O QUE É BLOCKCHAIN?</h1>
        <h2>BLOCKCHAIN</h2>
        <p>
          É uma tecnologia de registro descentralizada que utiliza grandes técnicas de criptografia para garantir a segurança e a integridade das transações. Funciona como um livro de registro digital, composto por blocos, onde cada um contém um conjunto de transações verificadas, que são encadeados de forma cronológica ao bloco anterior, se tornando, dessa forma, imutáveis. A descentralização elimina a necessidade de uma autoridade central, distribuindo o controle entre os participantes da rede.
        </p>
      </header>
      
      <section class="texto-2">
        <h2>VANTAGENS</h2>
        <p>
          O blockchain oferece uma série de vantagens para a forma como lidamos com transações e armazenamento de dados. Em primeiro lugar, ele proporciona segurança por meio da alta capacidade criptográfica e pela distribuição do registro digital, tornando extremamente difícil a alteração maliciosa de informações. Além disso, a descentralização elimina a necessidade de intermediários nas transações, reduzindo custos e aumentando a eficiência do processo. Também facilita a rastreabilidade, sendo particularmente benéfico em setores como cadeia de suprimentos e serviços financeiros.
        </p>
      </section>

      <section class="texto-3">
        <h2>APLICAÇÕES</h2>
        <p>
          A tecnologia Blockchain tem várias aplicações inovadoras que vão além do uso no universo de criptomoedas.
        </p>
        
        <h3>Créditos de Carbono</h3>
        <p>
          A conexão entre créditos de carbono e blockchain envolve o uso da tecnologia blockchain para garantir a transparência, a rastreabilidade e a segurança na emissão, transferência e verificação desses créditos. Essa combinação busca promover práticas mais sustentáveis e auxiliar no enfrentamento das mudanças climáticas.
        </p>

        <h3>Tokenização de Ativos Sustentáveis</h3>
        <p>
          A blockchain permite a criação de tokens representando ativos específicos, como áreas de floresta preservada, créditos de carbono ou participação em projetos de energia renovável. Esses tokens podem ser utilizados como uma forma de representar e transferir valor associado a esses ativos.
        </p>

        <h3>Doações Sustentáveis</h3>
        <p>
          Doações sustentáveis referem-se a contribuições financeiras ou recursos que são destinados a causas e projetos ambientalmente responsáveis e socialmente conscientes. A incorporação de blockchain nesse contexto pode trazer uma série de benefícios, incluindo transparência, rastreabilidade e eficiência nas transações.
        </p>

        <h3>Contratos Inteligentes para Doações Condicionais</h3>
        <p>
          Contratos inteligentes, que são programas autoexecutáveis na blockchain, podem ser usados para automatizar doações condicionais. Por exemplo, uma doação só seria liberada se metas específicas, como a conclusão de um projeto sustentável, fossem atingidas. Isso garante que os fundos sejam utilizados efetivamente para alcançar os objetivos desejados.
        </p>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default BlockchainPage;
