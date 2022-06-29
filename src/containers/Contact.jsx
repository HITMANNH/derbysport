import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import LogoContact from "../img/LogoContact";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const Contact = () => {
  return (
    <Grid container spacing={2}>
      <Grid item sx={12}>
        <LogoContact />
        <Grid item style={{ marginTop: "40px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              textAlign: "center",
            }}
          >
            SIEGE: Mvog-Ada BP: 33375 Yaoundé (Cameroun)
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              color: "#5497cb",
              textAlign: "center",
            }}
          >
            E-mail: derbysport@yahoo.com
          </Typography>
          <div
            className="div"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <PhoneInTalkIcon
                style={{
                  fontSize: "50px",
                  color: "green",
                  marginRight: "10px",
                }}
              />{" "}
              
            </div>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{
                textAlign: "center",
              }}
            >
              (+237) 222 229 330 / 677 241 496 /699 598 209/697 994 741/ 696 258
              334 /00447412049694
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
