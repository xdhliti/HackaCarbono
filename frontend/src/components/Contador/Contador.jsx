import React, { useState } from 'react';
import './Contador.css';

function Contador({ valorInicial }) {
  const [count, setCount] = useState(valorInicial);

  const incrementarValor = (valor) => {
    setCount(count + valor);
  };

  return (
    <div>
        <h1>{count}</h1>
    </div>
  );
}

export default Contador;