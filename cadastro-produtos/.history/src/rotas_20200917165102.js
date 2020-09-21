import React from 'react'
import { HashRouter, Switch, Route } from 'react-dom'

import Home from './pages/home'
import CadastroProduto from './pages/produtos/cadastro'

const Rotas = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/cadastro-produtos" exact component={CadastroProduto} />
                <Route path="/" component={Home} exact />
            </Switch>
        </HashRouter>

    )
}
 export default Rotas