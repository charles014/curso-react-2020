import React from 'react'
import ProdutoService from '../../app/produtoService'

export default class ConsultaProdutos extends React.Component {
    state = {
        produtos: []
    }

    constructor(){
        super()
        this.service = new ProdutoService();
    }

    componentDidMount(){
  

    }


    render() {

        return (

            <div className="card">
                <div className="card-header">
                    Consulta Produtos
            </div>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">SKU</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Fornecedor</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.produtos.map(produto => {
                                    return (
                                        <tr>
                                            <th>{produto.nome}</th>
                                            <th>{produto.sku}</th>
                                            <th>{produto.preco}</th>
                                            <th>{produto.fornecedor}</th>
                                            <th></th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}