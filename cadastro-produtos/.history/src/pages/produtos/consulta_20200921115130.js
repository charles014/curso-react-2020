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
                <ProdutosTable produtos={this.state.produtos}
                    editarAction={this.preparaEditar)}
                    deletarAction={this.deletar)}/>

            </Card>

        )
    }
}

export default withRouter(ConsultaProdutos)