import React from 'react'

class CadastroProduto extends React.Component{

   render(){
        return(
             <div className="card">
                   <div className="card-header">
                       Cadastro de Produto 
                    </div> 
                    <div className="card-body">
                         <div className="row">
                              <div className="col-md-6">
                                   <div className="form-group">
                                        <label>Nome: * </label>
                                        <input type="text" className="form-control"/>
                                   </div>
                              </div>
                              <div className="col-md-6">
                              <div className="form-group">
                                        <label>SKU: * </label>
                                        <input type="text" className="form-control"/>
                                   </div>
                              </div>

                         </div>

                    </div>
             </div>   



        )

   }


}

export default CadastroProduto