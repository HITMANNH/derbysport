import React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box className="thefooter">
      <Box className="thefooterbox">
        <Link to="/contact">
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          style={{
            textAlign: "center",
          }}
        >
          CONTACT
        </Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
