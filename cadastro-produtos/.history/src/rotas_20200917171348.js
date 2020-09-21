import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import CadastroProduto from './pages/produtos/cadastro'

function Rotas(){
    return (
        
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/cadastro-produtos" component={CadastroProduto} />                 */}
            </Switch>
        </HashRouter>
    )
}

export default Rotas;