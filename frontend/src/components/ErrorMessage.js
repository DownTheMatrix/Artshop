import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  errorMessage: {
    display: "block",
    color: "orangered"
  },
}));

const ErrorMessage = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.errorMessage} variant="h5">
      {children}
    </Typography>
  );
};

export default ErrorMessage;
