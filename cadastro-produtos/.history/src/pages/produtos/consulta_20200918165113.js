import React from 'react'


export default class ConsultaProdutos extends React.Component {
    state = {
        produtos: []
    }
    render() {

        return (
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


        )


    }


}