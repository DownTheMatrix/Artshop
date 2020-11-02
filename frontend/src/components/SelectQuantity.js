import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectQuantity = ({ product, qty, setQty }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item>
        <InputLabel id="products-quantity">Quantity</InputLabel>
      </Grid>
      <Grid item>
        <FormControl className={classes.formControl}>
          <Select
            name="products-quantity"
            id="products-quantity"
            value={qty}
            onChange={(evt) => setQty(evt.target.value)}
            displayEmpty
          >
            <MenuItem value="">0</MenuItem>
            {[...Array(product.countInStock).keys()].map((product) => (
              <MenuItem key={product + 1} value={product + 1}>
                {product + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SelectQuantity;
