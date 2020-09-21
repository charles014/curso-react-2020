import React from 'react'
import { HashRouter, Switch, Route } from 'react-dom'

import Home from './pages/home'
import CadastroProduto from './pages/produtos/cadastro'

function Rotas(){
    return (
        <HashRouter>
            <Switch>
                {/* <Route exact path="/cadastro-produtos" component={CadastroProduto} />
                <Route exact path="/" component={Home} /> */}
            </Switch>
        </HashRouter>

    )
}

export default Rotas