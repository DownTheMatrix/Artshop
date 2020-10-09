import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footerWrapper: {
    backgroundColor: "lightblue",
  },
  footerContent: {
    padding: "1rem",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footerWrapper}>
      <CssBaseline />
      <Container className={classes.footerContent}>
        <Typography align="center" component="p">
          Copyright 2020 &copy; ArtShop
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
