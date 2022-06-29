import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../App.css";

function Singleactu({ actuData }) {
  return (
    <Card
      style={{
        height: "270px",
        width: "375px",
      }}
    >
      <CardActionArea
        style={{
          display: "flex",
        }}
        className="card"
      >
        <img
          src={actuData.photo.data.attributes.formats.small.url}
          fluid
          className="divimage"
          alt="imageactu"
        />

        <CardContent className="boxtext">
          <div className="box1 text1">
            <div className="d">
              <div className="contentdata">
                <div className="seccont">
                  <div className="divsimple">
                    <Typography gutterBottom variant="h6" component="div">
                      {actuData.titre}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {actuData.contenu}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Singleactu;
