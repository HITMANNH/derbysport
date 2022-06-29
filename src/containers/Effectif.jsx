import Singleeffectif from "../components/Singleeffectif";
import { React, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Navbar from "./Navbar";
import Couveffectif from "../img/Couveffectif";
import "../App.css";
import axios from "axios";
import { URL_ATTAQUANT, URL_DEFENSEUR, URL_GARDIEN, URL_MILIEU } from "../Config";

function Effectif() {
  const [loading, setloading] = useState(true);
  const [gardien, setgardien] = useState(null);

  const [loaddef, setloaddef] = useState(true);
  const [defenseur, setdefenseur] = useState(null);

  const [loadmil, setloadmil] = useState(true);
  const [milieu, setmilieu] = useState(null);

  const [loadattaq, setloadattaq] = useState(true);
  const [attaqu, setattaqu] = useState(null);

  

  useEffect(() => {
    async function fetchgardien() {
      const request = await axios.get(URL_GARDIEN);
      setgardien(request.data.data);
      setloading(false);
      return request;
    }
    fetchgardien();
  }, []);

  useEffect(() => {
    async function fetchdefenseur() {
      const request = await axios.get(URL_DEFENSEUR);
      setdefenseur(request.data.data);
      setloaddef(false);
      return request;
    }
    fetchdefenseur();
  }, []);

  useEffect(() => {
    async function fetchmilieu() {
      const request = await axios.get(URL_MILIEU)
      setmilieu(request.data.data);
      setloadmil(false)
    }
    fetchmilieu();
  }, []);

  useEffect(() => {
    async function fetchattaq() {
      const request = await axios.get(URL_ATTAQUANT)
      setattaqu(request.data.data);
      setloadattaq(false)
    }
    fetchattaq();
  }, []);

  return (
    <div className="effectif">
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Couveffectif />
        <div className="div">
          <div className="div">
            <h2 className="typejoueur">GARDIENS</h2>
            <Grid container spacing={1} style={{ justifyContent: "center" }}>
              {loading
                ? "loaing"
                : gardien.map((joueur) => {
                    return (
                      <Grid item xs={12} sm={12} md={6} lg={4} xl={3} xxl={3}>
                        <Singleeffectif joueur={joueur} key={joueur.id} />
                      </Grid>
                    );
                  })}
            </Grid>
          </div>
          <div className="div">
            <h2 className="typejoueur">DEFENSEURS</h2>
            <Grid container spacing={1} style={{ justifyContent: "center" }}>
              {loaddef
                ? "loaing"
                : defenseur.map((joueur) => {
                    return (
                      <Grid item xs={12} sm={12} md={6} lg={4} xl={3} xxl={3}>
                        <Singleeffectif joueur={joueur} key={joueur.id} />
                      </Grid>
                    );
                  })}
            </Grid>
          </div>
          <div className="div">
            <h2 className="typejoueur">MILIEUX</h2>
            <Grid container spacing={1} style={{ justifyContent: "center" }}>
              {loadmil
                ? "loaing"
                : milieu.map((joueur) => {
                    return (
                      <Grid item xs={12} sm={12} md={6} lg={4} xl={3} xxl={3}>
                        <Singleeffectif joueur={joueur} key={joueur.id} />
                      </Grid>
                    );
                  })}
            </Grid>
          </div>
          <div className="div">
            <h2 className="typejoueur">ATTAQUANTS</h2>
            <Grid container spacing={1} style={{ justifyContent: "center" }}>
              {loadattaq
                ? "loaing"
                : attaqu.map((joueur) => {
                    return (
                      <Grid item xs={12} sm={12} md={6} lg={4} xl={3} xxl={3}>
                        <Singleeffectif joueur={joueur} key={joueur.id} />
                      </Grid>
                    );
                  })}
            </Grid>
          </div>
        </div>
        <Grid
          container
          spacing={1.5}
          style={{ justifyContent: "center" }}
        ></Grid>
      </Box>
    </div>
  );
}

export default Effectif;
