import React from 'react'
import { Card,CardActionArea,CardContent } from '@mui/material'

const Cardpartenaire = (partenaire) => {
  return (
    <>
      <Card
        sx={{ maxWidth: 400 }}
      >
        <CardActionArea>
         
          <CardContent>
           <img src={partenaire} alt="titi tata" />
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

export default Cardpartenaire