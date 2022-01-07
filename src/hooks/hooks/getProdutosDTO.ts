import { ApIAxios } from './../../../../Infra/infraAxios/APIAxios';
import { useHistory } from 'react-router';
import { ProdutoDTO } from './../../DTO/produtoDTO';
import { useEffect, useState } from 'react';
export function useGetProdutosDTO(value:string){

    const[produtosDTO,setPodutosDTO]=useState([{}as ProdutoDTO]);
    const historyErro=useHistory();
    if(value!=null){ 

    ApIAxios.get(value).then(reponse=>{
        if(reponse){
        setPodutosDTO(reponse.data);
        }                      
                }).catch(err=>{
                    historyErro.push("/erro/value");
                });
                
            }
        else{historyErro.push("/erro/notValue");}
       
    return produtosDTO;        
            
}