import React  from 'react'

const PRODUTOS = '_PRODUTOS'

export default class ProdutoService{

  salvar = (produto)=> {
        let produtos = localStorage.getItem(PRODUTOS)

        if(!produto){
            produtos = []
        } else {
            produtos = JSON.parse(produtos)
        }

        produtos.push(produto)

        localStorage.setItem(PRODUTOS, JSON.stringify(protudos))


  }

}