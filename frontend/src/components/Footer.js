import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function Footer() {
  return (
    <footer>
      <Container>
        <Typography align="center" variant="h6">
          Copyright 2020 &copy; ArtShop
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
