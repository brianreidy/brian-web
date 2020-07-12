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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import image from "_assets/images/solar_car.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 728,
      marginRight: "auto",
      marginLeft: "auto",
      margin: "1vh",
      // alignSelf: "flex-start",
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
    avatar: {
      backgroundColor: red[500],
    },
    a: {
      color: "inherit" /* blue colors for links too */,
      textDecoration: "inherit" /* no underline */,
    },
  })
);
// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    // <Wrapper>
    <Card className={classes.root}>
      <a href="http://google.com" target="_blank" className={classes.a}>
        <CardHeader
          title="georgia tech solar racing"
          subheader="october 2016 - may 2019: i spent a years building a car to travel across the united states"
        />
        <CardMedia
          className={classes.media}
          image={image}
          title="Paella dish"
        />
      </a>
    </Card>
    // {/* // </Wrapper> */}
  );
}
