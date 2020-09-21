import React from 'react'
import ProdutosService from '../../app/produtoService'
import { withRouter } from 'react-router-dom'
import Card from '../../components/card'

const estadoInicial = {
     nome: '',
     sku: '',
     descricao: '',
     preco: 0.00,
     fornecedor: '',
     sucesso: false,
     errors: [],
     atualizando: false
}
class CadastroProduto extends React.Component {

     state = estadoInicial

     constructor() {
          super()
          this.service = new ProdutosService();
     }

     onChange = (event) => {
          const valor = event.target.value
          const nomeDoCampo = event.target.name
          this.setState({ [nomeDoCampo]: valor })
     }

     onSubmit = (event) => {
          event.preventDefault();
          const produto = {
               nome: this.state.nome,
               sku: this.state.sku,
               descricao: this.state.descricao,
               preco: this.state.preco,
               fornecedor: this.state.fornecedor

          }
          try {
               this.service.salvar(produto)
               this.limpaCampos()
               this.setState({ sucesso: true })
          } catch (erro) {
               const errors = erro.errors
               this.setState({ errors: errors })
          }

     }

     limpaCampos = () => {
          this.setState(estadoInicial)
     }

     componentDidMount() {
          const sku = this.props.match.params.sku
          if (sku) {
               const result = this.service.obterProdutos().filter(produto => produto.sku === sku)
               if (result.length === 1) {
                    const retornoProduto = result[0];
                    this.setState({ ...retornoProduto, atualizando: true })

               }
          }

     }

     render() {
          return (
               <Card header={this.state.atualizando ? 'Atualização de Produto' : 'Cadastro de Produto'}}>               
                    
                         <form id="frmProduto" onSubmit={this.onSubmit} >
                              {this.state.sucesso &&
                                   <div class="alert alert-dismissible alert-success">
                                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                                        <strong>OK!</strong> Cadastro realizado com sucesso!
                              </div>
                              }
                              {this.state.errors.length > 0 &&
                                   this.state.errors.map(msg => {
                                        return (
                                             <div className="alert alert-dismissible alert-danger">
                                                  <button type="button" className="close" data-dismiss="alert">&times;</button>
                                                  <strong>Erro!</strong> {msg}
                                             </div>
                                        )
                                   })
                              }

                              <div className="row">
                                   <div className="col-md-6">
                                        <div className="form-group">
                                             <label>Nome: * </label>
                                             <input onChange={this.onChange} type="text" name="nome" value={this.state.nome} required className="form-control" />
                                        </div>
                                   </div>
                                   <div className="col-md-6">
                                        <div className="form-group">
                                             <label>SKU: * </label>
                                             <input onChange={this.onChange} type="text" name="sku" value={this.state.sku} className="form-control"
                                                  disabled={this.state.atualizando} />
                                        </div>
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="col-md-12">
                                        <div className="form-group">
                                             <label>Descrição:</label>
                                             <textarea onChange={this.onChange} name="descricao" className="form-control" value={this.state.descricao} />

                                        </div>
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="col-md-6">
                                        <div className="form-group">
                                             <label>Preço: * </label>
                                             <input onChange={this.onChange} name="preco" type="text" value={this.state.preco} className="form-control" />
                                        </div>
                                   </div>
                                   <div className="col-md-6">
                                        <div className="form-group">
                                             <label>Fonecedor: * </label>
                                             <input onChange={this.onChange} name="fornecedor" type="text" value={this.state.fornecedor} className="form-control" />
                                        </div>
                                   </div>
                              </div>

                              <div className="row">
                                   <div className="col-md-2">
                                        <button type="submit" className="btn btn-success">{this.state.atualizando ? 'Atulizar ' : 'Salvar '} </button>
                                   </div>
                                   <div className="col-md-1">
                                        <button onClick={this.limpaCampos} className="btn btn-primary">Limpar </button>
                                   </div>
                              </div>
                         </form>
                    </div>
               </Card>

          )

     }


}

export default withRouter(CadastroProduto);