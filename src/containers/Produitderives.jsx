import React from "react";
import ReactPlayer from "react-player";
import Couvimgf from "../img/Couvimgf";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { useQuery, gql } from "@apollo/client";
import { URL } from "../Config";
import "../App.css";

const produit = gql`
  query produitderive {
    produitderives {
      data {
        id
        attributes {
          description
          image {
            data {
              id
              attributes {
                formats
              }
            }
          }
          video {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const Produitderives = () => {
  const { loading, error, data } = useQuery(produit);
  if (loading) {
    return <p>loading ... </p>;
  }
  if (error) {
    return <p>loading ... </p>;
  }

  return (
    <>
      <Couvimgf />
      <Grid container style={{ marginTop: "3vh" }} spacing={2}>
        {data.produitderives.data.map((Single) => (
          <Grid item xs={12} sm={12} md={6} key={Single.id}>
            <ReactPlayer
              controls
              width="100%"
              height="30%"
              url={URL + Single.attributes.video.data.attributes.url}
            />
            <Typography>{Single.attributes.description}</Typography>
            <Card>
              <CardContent
                style={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={
                    URL +
                    Single.attributes.image.data.attributes.formats.small.url
                  }
                  alt=""
                />
              </CardContent>
            </Card>
            <Typography>
              Vente du materiel sportif (maillots, shorts, survêtements, plots,
              chasubles ballons, échelles, etc){" "}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Produitderives;
