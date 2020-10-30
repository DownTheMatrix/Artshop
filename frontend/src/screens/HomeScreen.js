import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import products from "../data/products";
import Product from "../components/Product";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginBottom: "3rem",
  },
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

function HomeScreen() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography className={classes.mainHeading} align="center" variant="h1">
        Welcome to ArtShop
      </Typography>
      <Grid className={classes.gridContainer} container spacing={3}>
        {products.map((product) => {
          return (
            <Grid key={product._id} item xs={12} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
}

export default HomeScreen;
