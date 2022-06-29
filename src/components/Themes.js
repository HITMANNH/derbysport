import { createTheme } from "@mui/material";
export const defaultTheme = createTheme({
  components: {
    MuiList: {
      alignItems: "center",
      justifyContent: "center",
    },
    MuiSwipeableDrawer: {
      styleOverrides: {
        root: {
          color: "#01135d",
          backgroundColor: "#f8f0c2",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: "#01135d",
          margin: "0px",
          backgroundColor: "#f8f0c2",
          "&:hover": {
            cursor: "pointer",
            borderBottom: "5px solid #01135d",
            transition: ".4s",
            display:"inline",
          },
         
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          color: "white",
          position: "fixed",
          zIndex: "100",
          top: "0px",
          "&:hover": {
            backgroundColor: "#f8f0c2",
            color: "#01135d",
            transition: ".8s",
          },
        },
      },
    },
  },
});

export const theme1 = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#f8f0c2",
          color: "#01135d",
          position: "fixed",
          zIndex: "200",
          transition: ".5s",
          top: "0px",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
  },
});


