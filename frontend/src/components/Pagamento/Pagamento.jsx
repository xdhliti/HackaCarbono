import React, { useState } from 'react';
import ValorPagamento from '../ValorPagamento/ValorPagamento';

const Pagamento = () => {

  return (
    <>
    <h1> Forma de pagamento </h1>
    <div class="mb-3">
    <label for="pagamento" class="form-label text-light">Telefone</label>
    <input type="number" class="form-control" id="pagamento" placeholder="Valor"/>
    </div>
    <button onClick={<Route path="/valorPagamento" element={<ValorPagamento />} />}>Enviar</button>
    </>
  );
}

export default Pagamento;
