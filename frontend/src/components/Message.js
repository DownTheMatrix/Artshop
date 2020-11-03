import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  errorMessage: {
    display: "block",
    color: "orangered",
    textAlign: "center"
  },
}));

const Message = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.errorMessage} variant="h5">
      {children}
    </Typography>
  );
};

export default Message;
