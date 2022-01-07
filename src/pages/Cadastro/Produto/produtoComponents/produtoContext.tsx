import React, { Component, useState } from "react";
import { createContext, DOMAttributes, HtmlHTMLAttributes } from "react";
import { render } from "react-dom";
import { Route } from "react-router";
import { BrowserRouter, Switch } from "react-router-dom";
import { ProdutoDTO } from "../../../../API/Domain/ScadiAgro/DTO/produtoDTO";
import { useGetProdutosDTO } from "../../../../API/Domain/ScadiAgro/Services/hooks/getProdutosDTO";
import { ProdutoView } from "../ProdutoView";

export interface IProdutoContext{
    oProdutosDTO:(value:string)=>ProdutoDTO[];
    oProdutoDTO:(codigo:string)=>ProdutoDTO;
}

export const ContextProdutoDTO=createContext({}as IProdutoContext);


export default function ProdutoContext(){

    const[prodPorCodigo,setProdPorCodigo]=useState({}as ProdutoDTO);
    const[oProdutos,setOProdutos]=useState([{}as ProdutoDTO]);

    const todosProdutosDTO=(value:string)=>{
        const produtosDTO:ProdutoDTO[]=useGetProdutosDTO(value);
        setOProdutos(produtosDTO);
       // console.log(useGetProdutosDTO(value))
        return oProdutos;
    };

    const produtoDTO=(codigo:string)=>{
        if(codigo==null){}
        const produtoRetornado=oProdutos.map(oProd=>oProd).filter(este=>este.codigo==codigo).find(prod=>prod);
        setProdPorCodigo(produtoRetornado);
        //console.log(prodPorCodigo)
        return prodPorCodigo;
    }    

    return(
        
        <ContextProdutoDTO.Provider value={{oProdutosDTO: todosProdutosDTO,oProdutoDTO:produtoDTO}}>
        <Route exact path="/Produto" component={ProdutoView} />
        </ContextProdutoDTO.Provider>
        
    )
    }
