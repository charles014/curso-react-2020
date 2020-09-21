import React from 'react'

class CadastroProduto extends React.Component {
     state = {
          nome : '',
          sku : '',
          descricao :'',
          preco: 0,
          fornecedor: ''
     }

     onChange = (event) => {
          const valor = event.target.value

     }


     render() {
          return (
               <div className="card">
                    <div className="card-header">
                         Cadastro de Produto
                    </div>
                    <div className="card-body">
                         <div className="row">
                              <div className="col-md-6">
                                   <div className="form-group">
                                        <label>Nome: * </label>
                                        <input type="text" value={this.state.nome} required className="form-control" />
                                   </div>
                              </div>
                              <div className="col-md-6">
                                   <div className="form-group">
                                        <label>SKU: * </label>
                                        <input type="text" value={this.state.sku} className="form-control" />
                                   </div>
                              </div>
                         </div>
                         <div className="row">
                              <div className="col-md-12">
                                   <div className="form-group">
                                        <label>Descrição:</label>
                                        <textarea className="form-control"  value={this.state.descricao}/>

                                   </div>
                              </div>
                         </div>
                         <div className="row">
                              <div className="col-md-6">
                                   <div className="form-group">
                                        <label>Preço: * </label>
                                        <input type="text" value={this.state.preco} className="form-control" />
                                   </div>
                              </div>
                              <div className="col-md-6">
                                   <div className="form-group">
                                        <label>Fonecedor: * </label>
                                        <input type="text" value={this.state.fornecedor} className="form-control" />
                                   </div>
                              </div>
                          </div>    

                         <div className="row">
                              <div className="col-md-1">
                                   <button className="btn btn-success">Salvar </button> 
                              </div>
                              <div className="col-md-1">
                                   <button className="btn btn-primary">Limpar </button> 
                              </div>                               
                         </div>
                    </div>
               </div>



          )

     }


}

export default CadastroProduto