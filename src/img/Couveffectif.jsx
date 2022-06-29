import React from 'react'
import Couveffec from './couveffectif.jpg'
import { Grid } from "@mui/material";

function Couveffectif() {
  return (
    <Grid className="imgactu">
    <img src={Couveffec} fluid className="couvertures" alt="imageactu" />
  </Grid>
  )
}

export default Couveffectif