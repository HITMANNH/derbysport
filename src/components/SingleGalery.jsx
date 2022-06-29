import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Card, CardActionArea } from "@mui/material";
import { URL } from "../Config";

const SingleGalery = () => {
  const { id } = useParams();

  const [loading, setloading] = useState(true);
  const [data, setdata] = useState(null);

  useEffect(() => {
    fetch(`${URL}/api/supportaires/${id}?populate=%2A`)
      .then((res) => res.json())
      .then((res) => {
        setdata(res);
        setloading(false);
      });
  }, [id]);
  return (
    <Grid
      container
      spacing={2}
      style={{
        marginTop:"15vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading ? (
        "loading"
      ) : (
        <Card>
          <CardActionArea>
            <img
              src={
                data.data.attributes.photo.data.attributes.formats.large.url
              }
              style={{width:"100%"}}
              alt="titi tata"
            />
          </CardActionArea>
        </Card>
      )}
    </Grid>
  );
};

export default SingleGalery;
