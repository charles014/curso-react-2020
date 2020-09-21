import React  from 'react'

const PRODUTOS = '_PRODUTOS'

export function ErroValidacao(errors){
    this.errors = errors;
}

export default class ProdutoService{
  
  obterProdutos = () => {
    const produtos = localStorage.getItem(PRODUTOS)
    return JSON.parse(produtos)

  }  


  validar = (produto) => {
        const errors = []

        if(!produto.nome) {
            errors.push('O campo Nome é obrigatório')
        } 
        if(!produto.sku) {
            errors.push('O campo SKU é obrigatório')
        } 
        if(!produto.preco || produto.preco <= 0) {
            errors.push('O campo Preço é deve conter valor maior que zero')            
        } 
        if(!produto.fornecedor) {
            errors.push('O campo Fornecedor é obrigatório')
        } 

        if(errors.length > 0 ){
            throw new ErroValidacao(errors)
        }
  }

  obterIndex = (sku) =>{
    int index = null;
    this.obterProdutos().forEach((produto, i) =>{
        if(produto.sku === sku){
            index = i;   
        }
    })

  }
  
  salvar = (produto)=> {
        
        this.validar(produto)

        let produtos = localStorage.getItem(PRODUTOS)

        if(!produtos){
            produtos = []
        } else {
            produtos = JSON.parse(produtos)
        }

        produtos.push(produto)

        localStorage.setItem(PRODUTOS, JSON.stringify(produtos))

  }

}