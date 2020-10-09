import React from "react";

/* Material UI */
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

/* Custom Components */
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  mainHeading: {
    fontSize: "1.5rem",
    fontWeight: 500,
    [theme.breakpoints.up("sm")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "4rem",
    },
    marginBottom: "2rem"
  },
  content: {},
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <Container>
          <Typography
            className={classes.mainHeading}
            align="center"
            variant="h1"
          >
            Welcome to ArtShop
          </Typography>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
