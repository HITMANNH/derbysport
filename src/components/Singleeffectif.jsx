import { React } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import "../App.css";

function Singleeffectif({ joueur }) {
  return (
    <Grid container>
      <Card
        style={{
          height: "270px",
          width: "400px",
        }}
      >
        <CardActionArea
          style={{
            display: "flex",
          }}
          className="card"
        >
          <img
            src={
              joueur.attributes.photo.data.attributes.formats.small.url
            }
            fluid
            className="divimage"
            alt="imageactu"
          />
          <CardContent className="boxtext">
            <div className="box1 text1">
              <div className="d">
                <div className="contentdata">
                  <div className="nom seccont">
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      style={{
                        color: "#5497cb",
                        textAlign: "center",
                        marginRight: "3px",
                      }}
                    >
                      NOM:
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      style={{
                        marginRight: "2px",
                        color: "#5497cb",
                        textAlign: "center",
                      }}
                    >
                      {joueur.attributes.nom}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      style={{
                        color: "#5497cb",
                        textAlign: "center",
                      }}
                    >
                      {joueur.attributes.prenom}
                    </Typography>
                  </div>
                  <div className="lieunais seccont">
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      style={{
                        marginRight: "4px",
                        color: "#5497cb",
                        textAlign: "center",
                      }}
                    >
                      NE:
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      style={{
                        color: "#5497cb",
                        textAlign: "center",
                      }}
                    >
                      {joueur.attributes.datenais}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      style={{
                        marginLeft: "3px",
                        marginRight: "2px",
                        color: "#5497cb",
                        textAlign: "left",
                      }}
                    >
                      A
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      style={{
                        color: "#5497cb",
                        textAlign: "center",
                      }}
                    >
                      {joueur.attributes.lieu}
                    </Typography>
                  </div>
                </div>
                <div className="contentdata">
                  <div className="datenais seccont">
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      style={{
                        marginRight: "3px",
                        color: "#5497cb",
                        textAlign: "center",
                      }}
                    >
                      TAILLE :
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      style={{
                        color: "#5497cb",
                        textAlign: "center",
                      }}
                    >
                      {joueur.attributes.taille}CM
                    </Typography>
                  </div>
                  <div className="lieunais seccont"></div>
                </div>

                <div className="lieunais seccont">
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    style={{
                      marginRight: "3px",
                      color: "#5497cb",
                      textAlign: "center",
                    }}
                  >
                    PIED :
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    style={{
                      color: "#5497cb",
                      textAlign: "center",
                    }}
                  >
                    DROITIER
                  </Typography>
                </div>
                <div className="lieunais seccont">
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    style={{
                      marginRight: "3px",
                      color: "#5497cb",
                      textAlign: "center",
                    }}
                  >
                    NAT :
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    style={{
                      color: "#5497cb",
                      textAlign: "center",
                    }}
                  >
                    CAMEROUNAISE
                  </Typography>
                </div>
              </div>
            </div>
            <div className="box2 text2">
              <div className="d">
                <div className="sbox">
                  <img
                    src={joueur.attributes.icone.data.attributes.url}
                    fluid
                    style={{
                      width: "30px",
                    }}
                    alt="imageactu"
                  />

                  <Typography
                    gutterBottom
                    variant="h7"
                    component="div"
                    style={{
                      color: "#010b57",
                      textAlign: "center",
                    }}
                  >
                    {joueur.attributes.nom}
                  </Typography>
                </div>
                <div className="sbox">
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    style={{
                      color: "#5497cb",
                      textAlign: "center",
                    }}
                  >
                    {joueur.attributes.numero}
                  </Typography>
                </div>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default Singleeffectif;
