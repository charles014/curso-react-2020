import React from 'react'


export class ConsultaProdutos extends React.Component {
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
                                    <th scope="row">Default</th>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                    <td>Column content</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        )


    }


}