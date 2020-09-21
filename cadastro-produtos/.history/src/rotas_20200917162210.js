import React from 'react'
import {HashRouter, Switch, Route} from 'react-dom'

import Home from './pages/home'
import CadastroProduto from './pages/produtos/cadastros'

export default () => {
    return(
        <HashRouter>
            <Switch>
            <Route exact path="/cadastro-produtos" component={CadastroProduto} />


            </Switch>            
        </HashRouter>

    )
}