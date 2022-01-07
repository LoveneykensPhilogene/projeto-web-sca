import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein,precoTotal) {
  return { name, calories, fat, carbs, protein, precoTotal };
}

const rows = [
  createData('04/01/2022', 159, 6.0, 24, 4.0,20),
  createData('04/01/2022', 237, 9.0, 37, 4.3,40),
  createData('04/01/2022', 262, 16.0, 24, 6.0,50),
  createData('04/01/2022', 305, 3.7, 67, 4.3,60),
  createData('04/01/2022', 356, 16.0, 49, 3.9,70),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Data</StyledTableCell>
            <StyledTableCell align="right">NF</StyledTableCell>
            <StyledTableCell align="right">Fornecedor</StyledTableCell>
            <StyledTableCell align="right">QTD</StyledTableCell>
            <StyledTableCell align="right">Preço unit</StyledTableCell>
            <StyledTableCell align="right">Preço total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.precoTotal}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
