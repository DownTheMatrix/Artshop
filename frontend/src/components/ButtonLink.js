import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonLink: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const ButtonLink = ({ children, variant, component, to, color }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.buttonLink}
      variant={variant}
      color={color}
      component={component}
      to={to}
    >
      {children}
    </Button>
  );
};

ButtonLink.defaultProps = {
  variant: "outlined",
  color: "secondary",
  text: "Go Back",
  to: "/"
};

export default ButtonLink;
