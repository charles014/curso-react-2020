import React, { useState } from 'react';

function App() {
  const [numero, setNumero] = useState(0)
  const [segundoNumero, setSegundoNumero] = useState(10)
  const [resultado, setResultado] = useState(15)

  const somar = () => {
      const numeroInt = parseInt(numero)
      const segNumeroInt = parseInt(segundoNumero)

      setResultado( numeroInt + segNumeroInt)
  }

  return (
    <div>
      Numero 1: <br />
      <input type="text" value={numero}
        onChange={e => setNumero(e.target.value)} /> <br />
      Numero 2: <br />
      <input type="text" value={segundoNumero}
        onChange={e => setSegundoNumero(e.target.value)} /><br />
      <button>Somar</button> <br/> 
      Resultado 1: <br />
      <input type="text" value={resultado} /><br />
    </div>
  );
}

export default App;
