import React from "react";
import styled from "styled-components";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import LinkIcon from "@material-ui/icons/Link";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import image from "_assets/images/solar_car.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: ".5vh",
      alignSelf: "flex-start",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Wrapper>
      <Card className={classes.root}>
        <CardHeader
          title="georgia tech solar racing"
          subheader="October 2016 - May 2019"
        />
        <CardActions>
          <a href="http://solarracing.gatech.edu/about-us/" target="_blank">
            <IconButton aria-label="go to gt's solar racing site">
              <LinkIcon />
            </IconButton>
          </a>
          <IconButton onClick={() => {}} aria-label="show more">
            <Brightness5Icon />
          </IconButton>
        </CardActions>
        <CardMedia
          className={classes.media}
          image={image}
          title="Paella dish"
        />
      </Card>
    </Wrapper>
  );
}
