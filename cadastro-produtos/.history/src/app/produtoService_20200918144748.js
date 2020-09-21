import React  from 'react'

const PRODUTOS = '_PRODUTOS'

export default class ProdutoService{

  salvar = (produto)=> {
        let produtos = localStorage.getItem(PRODUTOS)

        if(!produto){
            produto = []
        } else {
            produto = JSON.parse(produto)
        }

        produtos.push(produto)

        localStorage.setItem(PRODUTOS, JSON.stringify(protudo))


  }

}