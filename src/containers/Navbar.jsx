import { React, useState } from "react";
import AppBar from "@mui/material/AppBar";
import { SwipeableDrawer } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import { Toolbar } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Logoderby from "../img/Logoderby";
import { Typography } from "@mui/material";
import { ListItem, Grid, List, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../App.css";
import { defaultTheme, theme1 } from "../components/Themes";

export default function ButtonAppBar() {
  const [navBar, setnavBar] = useState(false);
  const [open, setopen] = useState(false);
  const [openclub, setopenclub] = useState(false);
  const [equipe, setequipe] = useState(false);
  const [boutique, setboutique] = useState(false);

  const changeTheme = () => {
    if (window.scrollY >= 40) {
      setnavBar(true);
    } else {
      setnavBar(false);
    }
  };
  let navigate = useNavigate();
  window.addEventListener("scroll", changeTheme);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={navBar ? theme1 : defaultTheme}>
        <AppBar position="static">
          <Toolbar className="thetoolbar">
            <Link to="/" onClick={() => setopen(false)}>
              <Logoderby />
            </Link>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setopen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Grid container spacing={1}>
              <Grid item sx={4} sm={4} md={2} lg={2} className="navgriditem">
                <Typography
                  variant="h7"
                  component="div"
                  style={{ cursor: "pointer" }}
                  sx={{ flexGrow: 1 }}
                  onClick={() => setopenclub(true)}
                >
                  CLUB
                </Typography>
              </Grid>
              <Grid item sx={12} sm={4} md={2} lg={2}>
                <Typography
                  variant="h7"
                  component="div"
                  style={{ cursor: "pointer" }}
                  sx={{ flexGrow: 1 }}
                  onClick={() => setequipe(true)}
                >
                  EQUIPE
                </Typography>
              </Grid>
              <Grid item sx={12} sm={4} md={4} lg={2}>
                <Typography
                  variant="h7"
                  component="div"
                  style={{ cursor: "pointer" }}
                  sx={{ flexGrow: 1 }}
                  onClick={() => setboutique(true)}
                >
                  BOUTIQUE
                </Typography>
              </Grid>
              <Grid item sx={12} sm={4} md={4} lg={2}>
                <Typography
                  variant="h7"
                  component="div"
                  style={{ cursor: "pointer" }}
                  sx={{ flexGrow: 20 }}
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  CONTACT
                </Typography>
              </Grid>
            </Grid>
            <Grid container className="gridnavbar">
              <Grid item sx={4} sm={4} md={2} lg={2}>
                <Typography
                  variant="h7"
                  component="div"
                  style={{ cursor: "pointer" }}
                  sx={{ flexGrow: 1 }}
                >
                  suivez-nous
                </Typography>
              </Grid>
              <Grid item sx={4} sm={4} md={2} lg={1}>
                <a href="https://youtu.be/ulE-hEMu5so">
                  <YouTubeIcon
                    sx={{ flexGrow: 1 }}
                    style={{
                      cursor: "pointer",
                      color: "white",
                      marginRight: "5px",
                    }}
                  />
                </a>
              </Grid>
              <Grid item sx={4} sm={4} md={2} lg={1}>
                <a href="http://www.facebook.com/derbyschengenfc">
                  <FacebookIcon
                    sx={{ flexGrow: 1 }}
                    style={{
                      cursor: "pointer",
                      color: "white",
                      marginLeft: "5px",
                    }}
                  />
                </a>
              </Grid>
              <Grid item sx={4} sm={4} md={2} lg={1}>
                <WhatsAppIcon
                  sx={{ flexGrow: 1 }}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/contact");
                  }}
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          anchor="top"
          open={open}
          onClose={() => setopen(false)}
          onOpen={() => {}}
        >
          <div>
            <Grid container spacing={2} style={{ display: "flex" }}>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3} xxl={3}>
                <h3 onClick={() => {}}>CLUB</h3>
                <List className="listelmt">
                  <ListItem>
                    <Link to="/" onClick={() => setopen(false)}>
                      <h3 className="simpletext">Acceuil</h3>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/historique" onClick={() => setopen(false)}>
                      <h3 className="simpletext">Historique</h3>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/organigram" onClick={() => setopen(false)}>
                      <h3 className="simpletext">Organigramme</h3>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/stade" onClick={() => setopen(false)}>
                      <h3 className="simpletext">Staduim</h3>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/partenaires" onClick={() => setopen(false)}>
                      <h3 className="simpletext">Nos partenaires</h3>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/galeries" onClick={() => setopen(false)}>
                      <h3 className="simpletext">Galerie</h3>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/contact" onClick={() => setopen(false)}>
                      <h3 className="simpletext">Contact</h3>
                    </Link>
                  </ListItem>
                </List>
              </Grid>

              <Grid
                className="rubrique"
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
                xxl={3}
              >
                <h3 onClick={() => {}}>EQUIPE</h3>
                <List>
                  <ListItem>
                    <Link to="/staff" onClick={() => setopen(false)}>
                      <h3 className="simpletext">Staff</h3>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/effectifs" onClick={() => setopen(false)}>
                      <h3 className="simpletext">Effectifs</h3>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/entrainnement" onClick={() => setopen(false)}>
                      <h3 className="simpletext">Planing des entrainnements</h3>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/actualite" onClick={() => setopen(false)}>
                      <h3 className="simpletext">Actualités</h3>
                    </Link>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3} xxl={3}>
                <h3 onClick={() => {}}>BOUTIQUE</h3>
                <List>
                  <ListItem>
                    <Link to="/contact" onClick={() => setopen(false)}>
                      <h3 className="simpletext">Billeterie</h3>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/contact" onClick={() => setopen(false)}>
                      <h3 className="simpletext">Abonnement</h3>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/produitsderive" onClick={() => setopen(false)}>
                      <h3 className="simpletext">Produit dérivés</h3>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/contact" onClick={() => setopen(false)}>
                      <h3 className="simpletext">Contact</h3>
                    </Link>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </div>
        </SwipeableDrawer>

        <SwipeableDrawer
          anchor="left"
          open={openclub}
          onClose={() => setopenclub(false)}
          onOpen={() => {}}
        >
          <Grid container spacing={2} style={{ display: "flex" }}>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} xxl={3}>
              <h3 onClick={() => {}}>CLUB</h3>
              <List className="listelmt">
                <ListItem>
                  <Link to="/" onClick={() => setopenclub(false)}>
                    <h3 className="simpletext">Acceuil</h3>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/historique" onClick={() => setopenclub(false)}>
                    <h3 className="simpletext">Historique</h3>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/organigram" onClick={() => setopenclub(false)}>
                    <h3 className="simpletext">Organigramme</h3>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/stade" onClick={() => setopenclub(false)}>
                    <h3 className="simpletext">Staduim</h3>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/partenaires" onClick={() => setopenclub(false)}>
                    <h3 className="simpletext">Nos partenaires</h3>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/galeries" onClick={() => setopenclub(false)}>
                    <h3 className="simpletext">Galerie</h3>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/contact" onClick={() => setopenclub(false)}>
                    <h3 className="simpletext">Contact</h3>
                  </Link>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </SwipeableDrawer>
        <SwipeableDrawer
          anchor="left"
          open={equipe}
          onClose={() => setequipe(false)}
          onOpen={() => {}}
        >
          <Grid container spacing={2} style={{ display: "flex" }}>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} xxl={3}>
              <h3 onClick={() => {}}>EQUIPE</h3>
              <List>
                <ListItem>
                  <Link to="/staff" onClick={() => setequipe(false)}>
                    <h3 className="simpletext">Staff</h3>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/effectifs" onClick={() => setequipe(false)}>
                    <h3 className="simpletext">Effectifs</h3>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/entrainnement" onClick={() => setequipe(false)}>
                    <h3 className="simpletext">Planing des entrainnements</h3>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/actualite" onClick={() => setequipe(false)}>
                    <h3 className="simpletext">Actualités</h3>
                  </Link>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </SwipeableDrawer>
        <SwipeableDrawer
          anchor="left"
          open={boutique}
          onClose={() => setboutique(false)}
          onOpen={() => {}}
        >
          <Grid container spacing={2} style={{ display: "flex" }}>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} xxl={3}>
              <h3 onClick={() => {}}>BOUTIQUE</h3>
              <List>
                <ListItem>
                  <Link to="/contact" onClick={() => setboutique(false)}>
                    <h3 className="simpletext">Billeterie</h3>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/contact" onClick={() => setboutique(false)}>
                    <h3 className="simpletext">Abonnement</h3>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/produitsderive" onClick={() => setboutique(false)}>
                    <h3 className="simpletext">Produit dérivés</h3>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/contact" onClick={() => setboutique(false)}>
                    <h3 className="simpletext">Contact</h3>
                  </Link>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </SwipeableDrawer>
      </ThemeProvider>
    </Box>
  );
}
