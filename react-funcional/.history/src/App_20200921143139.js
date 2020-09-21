import React, {useState} from 'react';

function App() {
 const [numero, setNumero] = useState(0)
 const [segundoNumero, setSegundoNumero] = useState(10)
 const [resultado, setResultado] = useState(15)

  return (
    <div>
      <input type="text" value={numero}/> <br/>
      <input type="text" value={segundoNumero}/><br/>
      <input type="text" value={resultado}/><br/>
    </div>
  );
}

export default App;
