import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Rating from "../components/Rating";
import Tooltip from "@material-ui/core/Tooltip";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import axios from "axios";
import SelectQuantity from "../components/SelectQuantity";

const useStyles = makeStyles((theme) => ({
  buttonLink: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  customContainer: {
    padding: theme.spacing(2),
  },
  listItem: {
    marginRight: theme.spacing(1),
  },
  productImage: {
    maxWidth: "100%",
    height: "auto",
  },
}));

const CustomTooltip = withStyles({
  tooltip: {
    fontSize: ".75rem",
    padding: ".75rem",
  },
})(Tooltip);

function ProductScreen({ match }) {
  const classes = useStyles();
  const [product, setProduct] = useState({});

  useEffect(() => {
    let source = axios.CancelToken.source();
    const fetchProduct = async () => {
      const res = await axios.get(`/api/products/${match.params.id}`, {
        cancelToken: source.token,
      });
      setProduct(res.data);
    };
    fetchProduct();
    return () => {
      source.cancel();
    };
  }, [match]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.customContainer} maxWidth="lg">
        <Button
          className={classes.buttonLink}
          variant="outlined"
          color="secondary"
          to="/"
          component={RouterLink}
        >
          Go Back
        </Button>
        <Grid container>
          <Grid item md={4}>
            <img
              className={classes.productImage}
              src={product.imgSrc}
              alt={product.name}
            />
          </Grid>
          <Grid item md={6}>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography variant="h5">{product.name}</Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText primary={`Price: ${product.price}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Description: ${product.description}`} />
              </ListItem>
            </List>
          </Grid>

          <Grid item md={2}>
            <Paper elevation={1} variant="outlined">
              <List>
                <ListItem divider>
                  <Grid item>
                    <ListItemText
                      style={{ fontWeight: "bold" }}
                      className={classes.listItem}
                      primary="Price:"
                    />
                  </Grid>
                  <Grid item>
                    <ListItemText primary={product.price} />
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid item>
                    <ListItemText
                      className={classes.listItem}
                      primary="Status:"
                    />
                  </Grid>
                  <Grid item>
                    <ListItemText
                      primary={
                        product.countInStock > 0 ? "In Stock" : "Out Of Stock"
                      }
                    />
                  </Grid>
                </ListItem>
                {product.countInStock > 0 && (
                  <ListItem>
                    <SelectQuantity product={product} />
                  </ListItem>
                )}
                <ListItem>
                  <CustomTooltip
                    title={
                      product.countInStock === 0
                        ? "This item is temporarily out of stock"
                        : ""
                    }
                  >
                    <span>
                      <Button
                        disabled={product.countInStock === 0}
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Add To Cart
                      </Button>
                    </span>
                  </CustomTooltip>
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default ProductScreen;
