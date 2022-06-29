import { React, useEffect, useState } from "react";
import "../App.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Couvstaf from "../img/Couvstaf";
import Singlestaff from "../components/Singlestaff";
import { Typography } from "@mui/material";
import { URL_STAFF } from "../Config";
import axios from "axios";

function Staff() {
  const [loading, setloading] = useState(true);
  const [debutstate, setdebutstate] = useState(null);

  useEffect(() => {

    async function fetchstaff(){
      const request = await axios.get(URL_STAFF);
      setdebutstate(request.data.data);
      setloading(false);
      return request;
    }
    fetchstaff();

    
  }, []);

  return (
    <div className="staff">
      <Box sx={{ flexGrow: 1 }}>
          <Couvstaf />
        <Grid container spacing={3}>
        
          <Grid className="gridsingle" spacing={2}>
            {loading
              ? "loading.."
              : debutstate.map((sdat) => (
                  <Grid className="manstaf" style={{ marginLeft: "20px" }}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      style={{
                        color: "#010b57",
                        textAlign: "center",
                      }}
                    >
                      {sdat.attributes.poste}
                    </Typography>
                    <Singlestaff sdat={sdat} key={sdat.id} />
                  </Grid>
                ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Staff;
