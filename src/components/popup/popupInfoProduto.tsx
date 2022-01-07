import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Table from "@material-ui/core/Table";
import { height } from "@mui/system";
import React from "react";
import { useState } from "react";
import { Abas } from "./margem/abas/abas";
import { MargemTela } from "./margem/margem";
import { NestedModal } from "./popupConsulta";
import { CustomizedTables } from "./tableData/tabelaConsulta";
import "./styles/infoProduto.css";


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

export function ViewInfoProduto() {
    const [open, setOpen] =useState(false);
    const handleOpen = () => {
      setOpen(true);
            };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <React.Fragment>
        <Button onClick={handleOpen}>últimas compras</Button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width:800, height:700 }}>
              <MargemTela/>
              <Abas/>
            <div className="container-input">
                <label>últimas compras</label>
                <input id="input" type="text"/>
            </div>
            {/* <p id="child-modal-description"></p> */}
                <CustomizedTables/>   
            
            <Button onClick={handleClose}>Voltar</Button>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }