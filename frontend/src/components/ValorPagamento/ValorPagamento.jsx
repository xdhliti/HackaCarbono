// src/pages/DoacoesSustentaveisPage.js
import React, { useState } from 'react';

const ValorPagamento = () => {

    return (
        <>
        <h1> Quanto você pode doar? </h1>
        <div class="mb-3">
        <label for="assunto" class="form-label text-light"></label>
        <select class="form-select" id="assunto">
            <option value="opcao0"></option>
            <option value="opcao1">CarbonToken</option>
            <option value="opcao2">Cartão de crédito</option>
            <option value="opcao3">Cartão de débito</option>
            <option value="opcao4">Boleto</option>
        </select>
        </div>
        <button>Pagar</button>
        </>
      );
}

export default ValorPagamento;
