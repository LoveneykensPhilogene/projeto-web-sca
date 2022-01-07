import Box from "@material-ui/core/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import { Abas } from "./margem/abas/abas";
import {MargemTela } from "./margem/margem";

import "./styles/global.css";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  
  export  function NestedModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
     
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        
      <div>
        <Button onClick={handleOpen}>Consulta</Button>
        
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width:800,height:700 }}>
              <MargemTela/>
            <h2 id="parent-modal-title"><Abas/></h2>
            <p id="parent-modal-description">            
            </p>
            <Box>
            <form className="container-global" >
                <div className="container-item">
                <label>Situação</label>
                <input type="text" value={""}/>
                </div>
                <div className="container-item">
                <label>Código</label>
                <input type="text" value={""}/>
                <label>Descrição</label>
                <input type="text" value={""}/>
                <label>Quantidade Disponível</label>
                <input type="text" value={""}/>
                <label>Unidade de Medida</label>
                <input type="text" value={""}/>
                <label>Grupo</label>
                <input type="text" value={""}/>
                <label>Subgrupo</label>
                <input type="text" value={""}/>
                <label>Observação</label>
                <textarea aria-label="Observação"/>
                </div>
                
         </form>
            </Box>
          </Box>
        </Modal>
      </div>
      
    );
  }
  
 