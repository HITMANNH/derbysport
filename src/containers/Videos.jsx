import React from "react";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import Logohisto from "../img/logohisto";
import Grid from "@mui/material/Grid";
import Presi from "../img/Presi";
import "../App.css"

function Videos() {
  return (
    <div className="">
      <Navbar />
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid items xs={12} sm={6} md={6} lg={4} xl={4} xxl={4}>
            <Presi />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <div className="div texthistorique">
              <h3>
                {" "}
                Fondée en 2008 par Monsieur Yves ADJAGOUAL, DERBY SPORT ACADEMY
                est une structure sportive ayant pour objectif d'une part la
                pratique du sport et d'autre part promeut l'insertion des jeunes
                en desoeuvrance au sein de la société à travers le sport. Par
                ailleurs, Derby Sport Academy a aussi pour vocation à former ses
                pensionnaires au métier du sport.{" "}
              </h3>
              <h3>
                En outre, sur le plan purement sportif, Derby Sport a été une
                multitude de fois champion départemental et aussi qualifé pour
                les 16ème de final de la coupe du Cameroun en 2017. Derby accède
                en deuxième division régionale en 2022.{" "}
              </h3>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
            <Logohisto />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Videos;
