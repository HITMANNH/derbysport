import React from "react";
import Logohisto from "../img/logohisto";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

function cardhisto() {
  return (
    <Card sx={{ maxWidth: 345, height: 600, marginTop: "100px" }}>
      <CardMedia component="img" image={Logohisto} alt="green guana" />
      <CardContent>
        <Typography>toto</Typography>
      </CardContent>
    </Card>
  );
}

export default cardhisto;
