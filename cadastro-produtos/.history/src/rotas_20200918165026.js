import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import CadastroProduto from './pages/produtos/cadastro'
import ConsultaProdutos from './pages/produtos/consulta'

function Rotas(){
    return (
        
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cadastro-produtos" component={CadastroProduto} /> 
                <Route exact path="/consulta-produtos" component={ConsultaProdutos} />                
            </Switch>
        </HashRouter>
    )
}

export default Rotas;