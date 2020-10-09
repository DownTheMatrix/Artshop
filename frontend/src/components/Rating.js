import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import StarEmptyIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalfOutlined";
import StarFullIcon from "@material-ui/icons/Star";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ratingWrapper: {
    display: "flex",
    alignContent: "center",
  },
  reviewsText: {
    marginLeft: ".5rem",
  },
}));

function Rating({ value, text }) {
  const classes = useStyles();
  return (
    <div className={classes.ratingWrapper}>
      <span>
        {value >= 1 ? (
          <StarFullIcon />
        ) : value >= 0.5 ? (
          <StarHalfIcon />
        ) : (
          <StarEmptyIcon />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <StarFullIcon />
        ) : value >= 1.5 ? (
          <StarHalfIcon />
        ) : (
          <StarEmptyIcon />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <StarFullIcon />
        ) : value >= 2.5 ? (
          <StarHalfIcon />
        ) : (
          <StarEmptyIcon />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <StarFullIcon />
        ) : value >= 3.5 ? (
          <StarHalfIcon />
        ) : (
          <StarEmptyIcon />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <StarFullIcon />
        ) : value >= 4.5 ? (
          <StarHalfIcon />
        ) : (
          <StarEmptyIcon />
        )}
      </span>
      <Typography className={classes.reviewsText} component="span">
        {text ? text : ""}
      </Typography>
    </div>
  );
}

export default Rating;
