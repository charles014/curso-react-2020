import React from 'react'
import ProdutoService from '../../app/produtoService'
import { withRouter } from 'react-router-dom'
import Card from '../../components/card'
import ProdutosTable from './produtosTable'


class ConsultaProdutos extends React.Component {
    state = {
        produtos: []
    }

    constructor() {
        super()
        this.service = new ProdutoService();
    }

    componentDidMount() {
        const produtos = this.service.obterProdutos();
        this.setState({ produtos: produtos })
    }

    preparaEditar = (sku) => {
        console.log('sku', sku)
        this.props.history.push(`/cadastro-produtos/${sku}`)

    }

    deletar = (sku) => {
        const produtos = this.service.deletar(sku);
        this.setState({ produtos: produtos })

    }

    render() {

        return (

            <Card header="Consulta Produtos">   
                <ProdutosTable  produtos={this.state.produtos}
                    editarAction={() => this.preparaEditar(produto.sku)}
                    deletarAction{() => this.deletar(produto.sku)}
                    >
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
                                this.state.produtos.map((produto, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{produto.nome}</th>
                                            <th>{produto.sku}</th>
                                            <th>{produto.preco}</th>
                                            <th>{produto.fornecedor}</th>
                                            <th>
                                                <button onClick={() => this.preparaEditar(produto.sku)} className="btn btn-primary"> Editar</button>
                                                <button onClick={() => this.deletar(produto.sku)} className="btn btn-danger"> Remover</button>
                                            </th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>                
                    </ProdutosTable>
            </Card>

        )
    }
}

export default withRouter(ConsultaProdutos)