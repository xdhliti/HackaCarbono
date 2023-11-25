import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { WagmiConfig } from 'wagmi'
import { chains, config } from './wagmi'

import BolsaVerdePage from './pages/BolsaVerdePage.jsx';
import BlockchainPage from './pages/BlockchainPage.jsx';
import CreditoDeCarbonoPage from './pages/CreditoDeCarbonoPage.jsx';
import DoacoesSustentaveisPage from './pages/DoacoesSustentaveisPage.jsx';
import DoarPage from './pages/DoarPage.jsx';
import QuemSomosNosPage from './pages/QuemSomosNosPage.jsx';
import PerfilPage from './pages/PerfilPage.jsx';
import FaleConoscoPage from './pages/FaleConoscoPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import TelaInicialPage from './pages/TelaInicialPage.jsx';
import ModoCompradorPage from './pages/ModoCompradorPage';
import CarteiraVirtualPage from './pages/CarteiraVirtualPage.jsx';
import DescricaoPage from './pages/DescricaoPage.jsx';

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
      <BrowserRouter>
            <nav class="navbarClass">
              <div className="navbarDiv">
                <Link to="/" element={<TelaInicialPage />} class="linkButton"> Tela Inicial </Link>
                <Link to="/quemSomosNos" element={<QuemSomosNosPage />} class="linkButton"> Sobre Nós </Link>
                <Link to="/blockchain" element={<BlockchainPage />} class="linkButton"> Blockchain</Link>
                <Link to="/faleConosco" element={<FaleConoscoPage />} class="linkButton"> Fale Conosco</Link>
                <Link to="/creditoDeCarbono" element={<CreditoDeCarbonoPage />} class="linkButton"> Credito de Carbono</Link>
                <Link to="/bolsaVerde" element={<BolsaVerdePage />} class="linkButton"> Bolsa Verde</Link>
                <Link to="/doacoesSustentaveis" element={<DoacoesSustentaveisPage />} class="linkButton"> Doacoes Sustentáveis</Link>
                <Link to="/login" element={<LoginPage />} class="linkButton"> Login </Link>
                <Link to="/perfil" element={<PerfilPage />} class="linkButton" ></Link>
                <Link to="/doar" element={<DoarPage />} class="linkButton"></Link>
                <Link to="/modoComprador" element={<ModoCompradorPage />} class="linkButton" ></Link>
                <Link to="/carteiraVirtual" element={<CarteiraVirtualPage />} class="linkButton" ></Link>
              </div>
            </nav>
            <Routes>
              <Route path="/" element={<TelaInicialPage />} />
              <Route path="quemSomosNos" element={<QuemSomosNosPage />} />
              <Route path="blockchain" element={<BlockchainPage />} />
              <Route path="faleConosco" element={<FaleConoscoPage />} />
              <Route path="creditoDeCarbono" element={<CreditoDeCarbonoPage />} />
              <Route path="bolsaVerde" element={<BolsaVerdePage />} />
              <Route path="doacoesSustentaveis" element={<DoacoesSustentaveisPage />} />
              <Route path="login" element={<LoginPage />} />

              <Route path="perfil" element={<PerfilPage />} />
              <Route path="doar" element={<DoarPage />} />
              <Route path="modoComprador" element={<ModoCompradorPage />} />
              <Route path="carteiraVirtual" element={<CarteiraVirtualPage />} />
              <Route path="descricao" element={<DescricaoPage />} />

            </Routes>
          </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
          
  </React.StrictMode>,
);


