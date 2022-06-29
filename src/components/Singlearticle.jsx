import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

function Singlearticle({ photo }) {
  return (
    <>
      <Link to={`/galerie/${photo.id}`}>
        <Card sx={{ Width: 600, height: 400 }}>
          <CardActionArea>
            <img
              src={
                photo.attributes.photo.data.attributes.formats.medium.url
              }
              alt="tititt"
              style={{ width: "510px" }}
            />
          </CardActionArea>
        </Card>
      </Link>
    </>
  );
}

export default Singlearticle;
