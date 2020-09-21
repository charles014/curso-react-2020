import React, {useState} from 'react';

function App() {
 const [numero, setNumero] = useState()
 const [segundoNumero, setSegundoNumero] = useState()
 const [resultado, setResultado] = useState()

  return (
    <div>
      <input type="text" value={numero}/>
      <input type="text" value={segundoNumero}/>
      <input type="text" value={resultado}/>
    </div>
  );
}

export default App;
