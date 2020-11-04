import React from "react";
import { Container, Typography, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import pageNotFoundIllustration from "../images/page-not-found.png";
import ButtonLink from "../components/ButtonLink";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  heading: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  wrapper: {
    flexDirection: "column",
    alignItems: "center"
  },
  responsiveImg: {
    maxWidth: "100%",
    margin: "auto",
    height: "auto",
    display: "block",
  },
}));

const PageNotFound = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container className={classes.wrapper}>
        <Grid item xs>
          <Typography
            className={classes.heading}
            align="center"
            variant="h3"
            component="h1"
          >
            Page not found.
          </Typography>
        </Grid>
        <Grid item xs>
          <ButtonLink
            style={{minWidth: "250px !important"}}
            component={RouterLink}
            to="/"
            variant="contained"
            color="secondary"
          >
            Go Back
          </ButtonLink>
        </Grid>
      </Grid>
      <Box mt={5}>
        <figure>
          <img
            className={classes.responsiveImg}
            src={pageNotFoundIllustration}
            alt="404 page not found illustration"
          />
        </figure>
      </Box>
    </Container>
  );
};

export default PageNotFound;
