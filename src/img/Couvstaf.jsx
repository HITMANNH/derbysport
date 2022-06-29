import React from 'react'
import staf from './couvstaf.jpg' 
import { Grid } from '@mui/material'

function Couvstaf() {
  return (
    <Grid className="">
    <img src={staf} fluid className="couverturesstaf" alt="imageactu" />
  </Grid>
  )
}

export default Couvstaf