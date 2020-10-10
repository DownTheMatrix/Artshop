import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
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
    marginBottom: "2rem",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <CssBaseline />
      <Header />
      <main>
        <Container>
          <Typography
            className={classes.mainHeading}
            align="center"
            variant="h1"
          >
            Welcome to ArtShop
          </Typography>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
