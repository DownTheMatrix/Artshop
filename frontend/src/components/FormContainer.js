import React from "react";
import { Grid } from "@material-ui/core";

const FormContainer = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        {children}
      </Grid>
    </Grid>
  );
};

export default FormContainer;
