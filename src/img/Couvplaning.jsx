import React from 'react'
import { Grid } from "@mui/material";
import couvplaning from './couvplaning.jpg'

function Couvplaning() {
  return (
    <Grid className="imgactu">
    <img src={couvplaning} fluid className="couvertures" alt="imageactu" />
  </Grid>
  )
}

export default Couvplaning