import Singlearticle from "../components/Singlearticle";
import { React, useEffect, useState } from "react";
import { URL_SUPPORTAIRE, URL_SUPPORTAIREVIDEO } from "../Config";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ReactPlayer from "react-player";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import Navbar from "./Navbar";
import Couvgalerie from "../img/Couvgalerie";
import "../App.css";

function Articlepage() {
  const [isloading, setisloading] = useState(true);
  const [loadstate, setloadstate] = useState(true);
  const [datasupportaire, setdatadatasupportaire] = useState(null);
  const [supportairevideo, setsupportairevideo] = useState(null);

  useEffect(() => {
    async function fetchsupportaire() {
      const request = await axios.get(URL_SUPPORTAIRE);
      setdatadatasupportaire(request.data.data);
      setisloading(false);
      return request;
    }
    fetchsupportaire();
  }, []);
  useEffect(() => {
    async function fetchsupportairevideo() {
      const request = await axios.get(URL_SUPPORTAIREVIDEO);
      setsupportairevideo(request.data.data);
      setloadstate(false);
      return request;
    }
    fetchsupportairevideo();
  }, []);

  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Couvgalerie />
        <Grid
          container
          spacing={1.5}
          style={{ justifyContent: "center", marginTop: "10vh" }}
        >
          {isloading
            ? "loading"
            : datasupportaire.map((photo) => (
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                  <Singlearticle photo={photo} key={photo.id} />
                </Grid>
              ))}
          {loadstate
            ? "loading"
            : supportairevideo.map((singvideo) => (
                <Grid
                  item
                  xs={12}
                  key={singvideo.id}
                  sm={12}
                  md={4}
                  lg={4}
                  xl={3}
                  xxl={4}
                  className="gridplayer"
                >
                  <Card sx={{ Width: 600 }}>
                    <CardActionArea>
                      <ReactPlayer
                        url={singvideo.attributes.video.data[0].attributes.url}
                        controls
                        width="100%"
                        marginTop="0"
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
        </Grid>
      </Box>
    </>
  );
}

export default Articlepage;
