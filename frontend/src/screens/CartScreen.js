import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../components/ErrorMessage";
import { addToCart, removeFromCart } from "../actions/cartActions";
import ButtonLink from "../components/ButtonLink";
import SelectQuantity from "../components/SelectQuantity";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  productImage: {
    maxWidth: "100%",
    display: "block",
    height: "auto",
    padding: ".5rem",
  },
  productDetailLink: {
    textDecoration: "none",
    fontSize: ".90rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "inherit",
    },
    "&:hover": {
      textDecoration: "inherit",
    },
  },
  reponsiveListItem: {
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
  },
}));

const CartScreen = ({ match, location, history }) => {
  const classes = useStyles();

  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    console.log("Checkout");
    history.push("/login?redirect=shipping");
  };

  return (
    <Grid className={classes.root} container spacing={2}>
      <Grid item md={8}>
        <Typography variant="h5" component="h1">
          Shopping Cart
        </Typography>
        {cartItems.length === 0 ? (
          <ErrorMessage>
            Your cart is empty{" "}
            <ButtonLink to="/" component={RouterLink}>
              Go Back
            </ButtonLink>
          </ErrorMessage>
        ) : (
          <List>
            {cartItems.map((item) => (
              <ListItem
                key={item.product}
                className={classes.reponsiveListItem}
              >
                <Grid item xs key={item.product}>
                  <img
                    className={classes.productImage}
                    src={item.image}
                    alt={item.name}
                  />
                </Grid>
                <Grid item xs>
                  <Link
                    className={classes.productDetailLink}
                    component={RouterLink}
                    to={`/product/${item.product}`}
                  >
                    {item.name}
                  </Link>
                </Grid>
                <Grid item xs>
                  ${item.price}
                </Grid>
                <Grid item xs>
                  <SelectQuantity
                    value={item.qty}
                    handleValueChange={(evt) =>
                      dispatch(addToCart(item.product, evt.target.value))
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((product) => (
                      <MenuItem key={product + 1} value={product + 1}>
                        {product + 1}
                      </MenuItem>
                    ))}
                  </SelectQuantity>
                </Grid>
                <Grid item xs>
                  <IconButton
                    onClick={() => removeFromCartHandler(item.product)}
                    color="secondary"
                    aria-label="Delete item"
                    component="div"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </ListItem>
            ))}
          </List>
        )}
      </Grid>
      <Grid item xs>
        <Card>
          <CardContent>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography variant="h6" component="h2">
                    Subtotal (
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                  </Typography>
                  $
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </ListItemText>
              </ListItem>
              <ListItem>
                <Button
                  color="primary"
                  variant="contained"
                  startIcon={<AddShoppingCartIcon />}
                  disabled={cartItems.length === 0}
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CartScreen;
