import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    [theme.breakpoints.down("xs")]: {
      minWidth: "auto"
    }
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectQuantity = ({ children, value, handleValueChange }) => {
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
            value={value}
            onChange={handleValueChange}
          >
            {children}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SelectQuantity;
