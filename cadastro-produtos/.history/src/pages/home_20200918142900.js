import React from 'react'
import CadastrarProduto from './produtos/cadastro'

function Home() {
    return (
        <div className="jumbotron">
            <h1 className="display-3">Bem Vindo!</h1>
            <p className="lead">
              Sistema inicial.</p>
            <hr className="my-4"/>                
                <p className="lead">
                    <a onClick={this.CadastrarProduto} className="btn btn-primary btn-lg" href="#" role="button">Cadastrar</a>
                </p>
         </div> 

    )
}

export default Home

