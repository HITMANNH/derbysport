import { React, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { Card, CardActionArea } from "@mui/material";
import Singleactu from "../components/Singleactu";
import Couvsite from "../img/Couvsite";
import ReactPlayer from "react-player/lazy";
import { URL_ACTUALITE } from "../Config";

export default function Actialites() {
  const [isloading, setisloading] = useState(true);
  const [data, setdata] = useState(null);

  useEffect(() => {
    async function fetchstaff() {
      const request = await axios.get(URL_ACTUALITE);
      setdata(request.data.data);
      setisloading(false);
      return request;
    }
    fetchstaff();
  }, []);

  return (
    <div className="actualite">
      <Box sx={{ flexGrow: 1 }}>
        <Couvsite />

        <Grid
          container
          style={{
            display: "flex",
            marginTop: "3vh",
            alignItems: "center",
            justifyContent: "center",
          }}
          spacing={3}
        >
          {isloading
            ? "loading"
            : data.map((video) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={4}
                    xxl={4}
                    className="gridplayer"
                  >
                    <Card sx={{ Width: 600 }}>
                      <CardActionArea>
                        <ReactPlayer
                          controls
                          width="100%"
                          url={video.attributes.video.data.attributes.url}
                        />
                      </CardActionArea>
                    </Card>
                    <Singleactu actuData={video.attributes} />
                  </Grid>
                );
              })}
        </Grid>
      </Box>
    </div>
  );
}
