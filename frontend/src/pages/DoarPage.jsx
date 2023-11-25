import React from 'react';
import Footer from '../components/Footer/Footer';

import "./DoarPage.css"

const DoarPage = () => {

    return (
        <>
        <br></br>
        <br></br> 
        <h1 class="central"> Quanto você pode doar? </h1>
        <div class="central">
        <div class="mb-3">
            <label for="pagamento" class="form-label text-light">Valor</label>
            <input type="number" class="form-control" id="pagamento" placeholder="Valor"/>
            <br></br>
        <select class="form-select" id="assunto" >
            <option value="opcao0"></option>
            <option value="opcao1">CarbonToken</option>
            <option value="opcao2">Cartão de crédito</option>
            <option value="opcao3">Cartão de débito</option>
            <option value="opcao4">Boleto</option>
        </select>
        </div>
        </div>
        <button class="btn btn-primary" align="center">Pagar</button>
        <Footer></Footer>
        </>
    );
  }
  
  export default DoarPage;