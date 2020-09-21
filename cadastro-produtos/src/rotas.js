import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import CadastroProduto from './pages/produtos/cadastro'
import ConsultaProdutos from './pages/produtos/consulta'

function Rotas() {
    return (

        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cadastro-produtos/:sku?" component={CadastroProduto} />
            <Route exact path="/consulta-produtos" component={ConsultaProdutos} />
        </Switch>

    )
}

export default Rotas;