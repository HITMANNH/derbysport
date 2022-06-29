import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Couvplaning from "../img/Couvplaning";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Lundi", "Séances de 8h à 10h", "Soins et récupération","7h50 au plus tard"),
  createData("Mardi", "Séances de 8h à 10h", "Soins et récupération","7h50 au plus tard"),
  createData("Mercredi", "Séance tactique de 8h à 10h ", "Soins et récupération ou match officiel", "7h50 au plus tard"),
  createData("Jeudi", "Séances de 8h à 10h", "Soins et récupération", "7h50 au plus tard"),
  createData("Vendredi", "Séances de 8h à 10h", "Soins et récupération","7h50 au plus tard"),
  createData("Samedi", "","Match officiel"),
  createData("Dimanche", "repos", "repos"),
];

function Entrainnement() {
  return (
    <>
      <Couvplaning />
      <TableContainer component={Paper}>
        <Table sx={{ Width: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Jours</StyledTableCell>
              <StyledTableCell align="right">Matin</StyledTableCell>
              <StyledTableCell align="right">Après-Midi</StyledTableCell>
              <StyledTableCell align="right">Arrivée des joueurs et des entraîneurs</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
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
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="div texttab">
          <h2> <span className="bouton">.</span> Les entraînements ont lieu sur les terrains de la base 101 à deux chevaux.</h2>
          <h2> <span className="bouton">.</span> Les décrassages sont plus courts que les entraînements. Généralement, les titulaires du précédent match sont aux soins ou partent en footing. Les remplaçants et ceux qui n'ont pas joué s'entraînent.</h2>
          <h2><span className="bouton">.</span> Un entraînement peut être annulé au dernier moment ou alors se dérouler dans un autre lieu.</h2>
      </div>
    </>
  );
}

export default Entrainnement;
