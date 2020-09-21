import React, { useState } from 'react';
import useStore from './somaReducer'

function ReducerHook() {

    const [numero, setNumero] = useState('')
    const [segundoNumero, setSegundoNumero] = useState('')

    const [store, dispat ch] = useStore()

    const somar = () => {
        const numeroInt = parseInt(numero)
        const segNumeroInt = parseInt(segundoNumero)

         dispatch({
              type:'SOMA',
              payload: numeroInt + segNumeroInt   
         })   
         
    }

    return (
        <div>
            Numero 1: <br />
            <input type="text" value={numero}
                onChange={e => setNumero(e.target.value)} /> <br />
      Numero 2: <br />
            <input type="text" value={segundoNumero}
                onChange={e => setSegundoNumero(e.target.value)} /><br />
            <button onClick={somar}>Somar</button> <br />
      Resultado 1: <br />
            <input type="text" value={resultado} /><br />
        </div>
    );
}

export default ReducerHook;
