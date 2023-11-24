import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { WagmiConfig } from 'wagmi';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import BolsaVerdePage from './pages/BolsaVerdePage.jsx';
import BlockchainPage from './pages/BlockchainPage.jsx';
import CreditoDeCarbonoPage from './pages/CreditoDeCarbonoPage.jsx';
import DoacoesSustentaveisPage from './pages/DoacoesSustentaveisPage.jsx';
import NoMatchPage from './pages/NoMatch.jsx';
import QuemSomosNosPage from './pages/QuemSomosNosPage.jsx';
import PerfilPage from './pages/PerfilPage.jsx';
import FaleConoscoPage from './pages/FaleConoscoPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import TelaInicialPage from './pages/TelaInicialPage.jsx';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
        <React.StrictMode>
          <BrowserRouter>
            <nav>
              <Link to="/" element={<TelaInicialPage />}> TelaInicialPage </Link>
              <Link to="/quemSomosNos" element={<QuemSomosNosPage />}> QuemSomosNosPage </Link>
              <Link to="/blockchain" element={<BlockchainPage />}> BlockchainPage </Link>
              <Link to="/faleConosco" element={<FaleConoscoPage />}> FaleConoscoPage </Link>
              <Link to="/creditoDeCarbono" element={<CreditoDeCarbonoPage />}> CreditoDeCarbonoPage </Link>
              <Link to="/bolsaVerde" element={<BolsaVerdePage />}> BolsaVerdePage </Link>
              <Link to="/doacoesSustentaveis" element={<DoacoesSustentaveisPage />}> DoacoesSustentaveisPage </Link>
              <Link to="/login" element={<LoginPage />}> LoginPage </Link>
              <Link to="/perfil" element={<PerfilPage />}> PerfilPage </Link>
              <Link to="*" element={<NoMatchPage />} > NoMatch </Link>
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
              <Route path="*" element={<NoMatchPage />} />
            </Routes>
          </BrowserRouter>
        </React.StrictMode>

          <Footer/>    
        </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
);
