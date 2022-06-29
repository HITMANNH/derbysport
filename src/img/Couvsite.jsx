import React from "react";
import couvsite from "./couvsite.png";
import { Grid } from "@mui/material";

function Couvsite() {
  return (
    <Grid className="imgactu">
      <img src={couvsite} fluid className="couvertures" alt="imageactu" />
    </Grid>
  );
}

export default Couvsite;
