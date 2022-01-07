import { useState } from "react";
import { ApIAxios } from "../../../../Infra/infraAxios/APIAxios";
import { useHistory } from 'react-router';

export function useGetUltimasCompras(value:string){

    const[compras,setCompras]=useState<[]|null>();
    const historyErro=useHistory();

    if(value!=null){
        const ultimasCompras=async()=>{
            await ApIAxios.get("/"+value).then(reponse=>{
                setCompras(reponse.data);
            }).catch(err=>{
                historyErro.push("/erro");
            });
            
        }
    }else{historyErro.push("/erro");}

    return compras;
}


