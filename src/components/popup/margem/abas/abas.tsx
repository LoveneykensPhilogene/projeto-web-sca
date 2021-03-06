
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import { ViewInfoProduto } from '../../popupInfoProduto';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export function Abas(){
  const classes = useStyles();
  const [value, setValue] =useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        
      >
        <Tab label="Dados" />
        <Tab label={<ViewInfoProduto/>}/>
      </Tabs>
    </Paper>
  );
}
