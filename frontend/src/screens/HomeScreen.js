import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import products from "../products";
import Product from "../components/Product";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginBottom: "3rem",
  },
}));

function HomeScreen() {
  const classes = useStyles();
  return (
    <Grid className={classes.gridContainer} container spacing={3}>
      {products.map((product) => {
        return (
          <Grid key={product._id} item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default HomeScreen;
