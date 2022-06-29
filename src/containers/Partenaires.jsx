import React from "react";
import PartenairesImg from "../img/PartenairesImg";
import { Grid } from "@mui/material";
import Adjagoualimg from "../img/Adjagoualimg";
import DerbyTv from "../img/DerbyTv";
import Snsport from "../img/Snsport";
import "../App.css";

const Partenaires = () => {
  return (
    <>
      <PartenairesImg />
      <Grid container>
        <Grid   item >
          <Adjagoualimg />
        </Grid>
        <Grid  item >
          <DerbyTv />
        </Grid>
        <Grid  item >
          <Snsport />
        </Grid>
      </Grid>
    </>
  );
};

export default Partenaires;
