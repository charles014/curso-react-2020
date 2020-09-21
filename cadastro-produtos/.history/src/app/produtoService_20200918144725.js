import React  from 'react'

const PRODUTOS = '_PRODUTOS'

export default class ProdutoService{

  salvar = (produto)=> {
        let protudos = localStorage.getItem(PRODUTOS)

        if(!produto){
            produto = []
        } else {
            produtos = JSON.parse(produtos)
        }

        produtos.push(produto)

        localStorage.setItem(PRODUTOS, JSON.stringify(protudo))


  }

}