import { React } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

function Singlestaff({ sdat }) {
  return (
    <Grid container>
      <Card
        style={{
          height: "290px",
          width: "385px",
          margin: "20px",
        }}
      >
        <CardActionArea
          style={{
            display: "flex",
          }}
        >
          <CardMedia
            component="img"
            height="310"
            style={{width: "200px"}}
            image={
            
              sdat.attributes.photo.data.attributes.formats.small.url
            }
            alt="inagedecarte"
          />
          <CardContent>
            <div className="typocontainer">
              <div className="sbox">
              <img
                src={
                 
                  sdat.attributes.icone.data.attributes.url
                }
                fluid
                style={{
                  width: "30px",
                }}
                alt="imageactu"
              />
                <Typography
                  variant="body1"
                  style={{ color: "black" }}
                  color="text.secondary"
                >
                  NOM
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{
                    color: "#010b57",
                    textAlign: "center",
                  }}
                >
                  {sdat.attributes.nom}
                </Typography>
              </div>
            </div>
            <div className="typocontainer">
              <div className="sbox">
                <Typography
                  variant="body1"
                  style={{ color: "black" }}
                  color="text.secondary"
                >
                  PRENOM
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{
                    color: "#010b57",
                    textAlign: "center",
                  }}
                >
                  {sdat.attributes.prenom}
                </Typography>
              </div>
            </div>
            <div className="typocontainer"></div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default Singlestaff;
