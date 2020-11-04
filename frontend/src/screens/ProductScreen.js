import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Rating from "../components/Rating";
import Tooltip from "@material-ui/core/Tooltip";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import SelectQuantity from "../components/SelectQuantity";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import ButtonLink from "../components/ButtonLink";

const useStyles = makeStyles((theme) => ({
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

function ProductScreen({ history, match }) {
  const classes = useStyles();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match.params.id]);

  const handleAddToCart = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.customContainer} maxWidth="lg">
        <ButtonLink component={RouterLink} to="/">
          Go Back
        </ButtonLink>
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : (
          <Grid container>
            <Grid item xs={12} md={6} lg={4}>
              <img
                className={classes.productImage}
                src={product.imgSrc}
                alt={product.name}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
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
                  <ListItemText
                    primary={`Description: ${product.description}`}
                  />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={6} md={12} lg={2}>
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
                      <SelectQuantity
                        product={product}
                        value={qty}
                        handleValueChange={(evt) => setQty(evt.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map(
                          (product) => (
                            <MenuItem key={product + 1} value={product + 1}>
                              {product + 1}
                            </MenuItem>
                          )
                        )}
                      </SelectQuantity>
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
                          onClick={handleAddToCart}
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
        )}
      </Container>
    </React.Fragment>
  );
}

export default ProductScreen;
