import React from 'react'

export default (props) => (

    <table className="table table-hover">
        <thead>
            <tr>
                <th scope="col">Nome</th>
                <th scope="col">SKU</th>
                <th scope="col">Preço</th>
                <th scope="col">Fornecedor</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            {
                props.produtos.map((produto, index) => {
                    return (
                        <tr key={index}>
                            <th>{produto.nome}</th>
                            <th>{produto.sku}</th>
                            <th>{produto.preco}</th>
                            <th>{produto.fornecedor}</th>
                            <th>
                                <button onClick={() => this.preparaEditar(produto.sku)} 
                                    className="btn btn-primary"> Editar</button>
                                <button onClick={() => this.deletar(produto.sku)} 
                                    className="btn btn-danger"> Remover</button>
                            </th>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>


) 