import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import Rating from "./Rating";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  divider: {
    margin: "0.5rem 0",
  },
}));

function Product({ product }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={product.name}
            height="200"
            image={product.imgSrc}
            title={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
            <Divider className={classes.divider} />
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
            <Divider className={classes.divider} />
            <Typography variant="body1" color="textSecondary" component="p">
              ${product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link
            component={RouterLink}
            to={`/product/${product._id}`}
            color="inherit"
            underline="none"
          >
            <Button size="small" color="primary">
              Details
            </Button>
          </Link>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}

export default Product;
