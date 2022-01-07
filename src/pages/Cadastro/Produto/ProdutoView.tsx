
import Modal from "@material-ui/core/Modal";
import { Button, makeStyles } from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { count } from "console";
import { number } from "echarts/core";
import { config } from "process";
import React, { useContext } from "react";
import { useState } from "react";
import { ProdutoDTO } from "../../../API/Domain/ScadiAgro/DTO/produtoDTO";
import UsuarioLoginDTO from "../../../API/Domain/ScadiAgro/DTO/usuarioLoginDTO";
import login from "../../../API/Domain/ScadiAgro/Services/login";
import { ApIAxios } from "../../../API/Infra/infraAxios/APIAxios";
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import BodyTableProduto, { ContextProdutoDTO } from "./produtoComponents/produtoContext";
import { NestedModal } from "../../../Components/popup/popupConsulta";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import ThemeProvider from "@mui/system/ThemeProvider";
import { SCADITheme } from "../../../Components/Themes/Themes";
import { SCADIAgro } from "../../../Util/collorPalette";
import { useStyles } from "../../Home/viewHome";
import { width } from "@mui/system";
import { ViewInfoProduto } from "../../../Components/popup/popupInfoProduto";
import MontaGrid from "../../../Components/Grid/viewGrid";
import GridProduto from "../pastaGrid/gridProduto";
import { useGetProdutosDTO } from "../../../API/Domain/ScadiAgro/Services/hooks/getProdutosDTO";
import VisibilityIcon from '@mui/icons-material/Visibility';

interface IProduto{
codigo: string,
descricao:  string,
grupo:  string,
observacao: string,
quantidadeDisponivel:  string,
situacaoAtual:  string,
subGrupo: string,
unidade:  string,
}
export class dadosTeste {
     static actions = [{id: 0, element: 
     //<Button

    //     onClick={() => {
    //         const [isClicked,setIsClicked]=useState(false);
    //         if(isClicked){
    //         setIsClicked(true)
    //         }

    //       return isClicked;
    //     }}
    //   >
    //     <VisibilityIcon></VisibilityIcon>
    //<VisibilityIcon/>
        <NestedModal/>
        
    //  </Button> 
    }];
    
	static dados = '[{ "detalhe" :"", "codigo" : "08","descricao" : "oi tudo bom", "quantidade" : "055.225.386-22", "unidade" : "PR", "grupo" : "Curitiba", "subgrupo" : "041 99823-2304"}, { "detalhe" :"", "codigo" : "08","descricao" : "oi tudo bom", "quantidade" : "055.225.386-22", "unidade" : "PR", "grupo" : "Curitiba", "subgrupo" : "041 99823-2304"}]'
    /*"descricao" : "oi tudo bom", "quantidade" : "055.225.386-22", "unidade" : "PR", "grupo" : "Curitiba", "subGrupo" : "041 99823-2304"} , { "Detalhe" : "", "Codigo" : "08", "Descricao" : "oi tudo bom", "Quantidade" : "055.225.386-22", "Unidade" : "PR", "Grupo" : "Curitiba", "SubGrupo" : "041 99823-2304"}  ,  { "Detalhe" : "", "Codigo" : "08", "Descricao" : "oi tudo bom", "Quantidade" : "055.225.386-22", "Unidade" : "PR", "Grupo" : "Curitiba", "SubGrupo" : "041 99823-2304"} ]'*/
    };
    
export  function ProdutoView(){   
   const oUsuarioDTO = new UsuarioLoginDTO("alceuvicenzi", "SCADI", "idacs",  "001");

    let oLogin = new login(oUsuarioDTO.dtoToObject());

    oLogin.getToken();
    if (oLogin.getStatus() === 200) {  
        console.log("Token:");
        console.log(sessionStorage.getItem("token")); 
    } else {
        console.log("Erro: " + oLogin.getStatus());
    }
    
    // const todosProdutos=async()=>await ApIAxios.get("cadastro/produto"
    
    // ).then(reponse=>{

    // // setProduto(reponse.data)
        
    //     console.log(JSON.stringify(reponse.data))
    // }
        
    //     ).catch(error=>console.log("Não Passou!"))
    const[produto,setProduto]=useState([{}as IProduto]);
         //const{oProdutosDTO,oProdutoDTO}=useContext(ContextProdutoDTO);
        //const teste= oProdutosDTO("cadastro/produto"); 
        //setProduto(teste)   
        const[click,setClick]=useState(false);
      const isClicked=()=>{         
            setClick(true);
            if(click){
                setClick(false)
            }
        }
        const classes=useStyles();
            const pesquisaTeste=dadosTeste.dados;
    
   return(

    <ThemeProvider theme={SCADITheme}>
        <div className={classes.body}>
			<Sidebar title={"Produto"} />       


            <div className={classes.header}>
                
                <NestedModal/>
                <button type="button" >Click</button>
              <input type="text"placeholder={"Buscar"}  width={600}></input>
            </div>
        </div>
         <GridProduto infos={pesquisaTeste} /> 
    		</ThemeProvider>
        
       
    )
   }




