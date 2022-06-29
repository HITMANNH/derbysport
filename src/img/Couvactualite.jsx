import React from "react";
import Couvactu from "./couvactualite.jpg";
import { Grid } from "@mui/material";

function Couvactualite() {
  return (
      <Grid className="imgactu">
        <img src={Couvactu} fluid className="couvertures" alt="imageactu" />
      </Grid>
  );
}

export default Couvactualite;
