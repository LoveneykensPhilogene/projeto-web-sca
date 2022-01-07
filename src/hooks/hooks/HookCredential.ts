import { useState } from 'react';
import UsuarioLoginDTO from '../../DTO/usuarioLoginDTO';
import login from '../login';

export interface ICredential{
     idConexao:String;
     usuario:String;
     senha:String;
     codEmpresa:String;
     token?:String;
     dataLogin?:Date;
}

export function useCredential(oCredential:ICredential){
    const[usuarioDTO,setUsuarioDTO]=useState({}as UsuarioLoginDTO);
    setUsuarioDTO(new UsuarioLoginDTO(oCredential.idConexao.toString(),oCredential.usuario.toString(),oCredential.senha.toString(),oCredential.codEmpresa.toString()));
    const oLogin=new login(usuarioDTO.dtoToObject());
    console.log("--------------Login---------------");
    oLogin.getToken();
    if (oLogin.getStatus() === 200) {  
        console.log("Token:");
        console.log(sessionStorage.getItem("token")); 
    } else {
        console.log("Erro: " + oLogin.getStatus());
    }
    console.log("----------------------------------");
}

    
