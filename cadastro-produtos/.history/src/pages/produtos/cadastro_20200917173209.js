import React from 'react'

class CadastroProduto extends React.Component {

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
                                        <input type="text" className="form-control" />
                                   </div>
                              </div>
                              <div className="col-md-6">
                                   <div className="form-group">
                                        <label>SKU: * </label>
                                        <input type="text" className="form-control" />
                                   </div>
                              </div>
                         </div>
                         <div className="row">
                              <div className="col-md-12">
                                   <div className="form-group">
                                        <label>Descrição:</label>
                                        <textarea className="form-control" />

                                   </div>
                              </div>
                         </div>
                         <div className="row">
                              <div className="col-md-6">
                                   <div className="form-group">
                                        <label>Preço: * </label>
                                        <input type="text" className="form-control" />
                                   </div>
                              </div>
                              <div className="col-md-6">
                                   <div className="form-group">
                                        <label>Fonecedor: * </label>
                                        <input type="text" className="form-control" />
                                   </div>
                              </div>
                          </div>    

                         <div className="row">
                              <div className="col-md-1">
                                   <button className="btn btn-sucess">Salvar </button> 

                              </div>                               
                         </div>
                    </div>
               </div>



          )

     }


}

export default CadastroProduto