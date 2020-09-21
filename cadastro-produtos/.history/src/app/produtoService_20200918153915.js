import React  from 'react'

const PRODUTOS = '_PRODUTOS'

export default class ProdutoService{

  validar = (produto) => {
        const errors = []


        if(errors.length > 0 ){
            throw Error(errors)
        }
  }
  
  

  salvar = (produto)=> {
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