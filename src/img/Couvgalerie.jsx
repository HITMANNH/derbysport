import React from 'react'
import Couvimg from './couvgalerie.png';
import { Grid } from '@mui/material';

const Couvgalerie = () => {
  return (
    <Grid className="imgactu">
      <img src={Couvimg} fluid className="couvertures" alt="imageactu" />
    </Grid>
  )
}

export default Couvgalerie