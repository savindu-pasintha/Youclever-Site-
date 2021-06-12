import React from "react";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import WorkIcon from "@material-ui/icons/Work";
import EmailIcon from "@material-ui/icons/Email";
import SendIcon from "@material-ui/icons/Send";

import FullScreenDialogEmail from "../SendMail/FullScreenDialogEmail";

import Fade from "react-reveal/Fade";

import Portfolio from "../ViewPortFolio";

import Photo from "./abc.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function SampleDevelopers(props) {
  const classes = useStyles();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        top: "20px",
        textAlign: "center",
      }}
    >
      <Fade top>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="C"
              height="140"
              image={props.image || Photo}
              title="Contemplative Reptile"
              style={{
                width: "200px",
                height: "200px",
                position: "relative",
                top: "0px",
                borderRadius: "50%",
                margin: "auto",
              }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{
                  textAlign: "center",
                }}
              >
                {props.job}
              </Typography>
              <WorkIcon
                style={{
                  textAlign: "left",
                  position: "relative",
                  left: "10px",
                  color: "#e1701a",
                }}
              />
              <div
                style={{
                  textAlign: "left",
                  position: "relative",
                  left: "10px",
                }}
              >
                <Typography gutterBottom variant="h6" component="h2">
                  {props.experience}
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                  Sri Lanka
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                  {props.name}
                </Typography>
                <EmailIcon
                  style={{
                    textAlign: "left",
                    position: "relative",
                    left: "10px",
                    color: "purple",
                  }}
                />
                <Typography gutterBottom variant="h6" component="h2">
                  {props.id}
                </Typography>
              </div>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.about}{" "}
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <FullScreenDialogEmail name={props.name} email={props.id} />
            {/**butn 
            <Portfolio
              iduser={props.id}
              textcolor="white"
              backgroundcolor="purple"
            />*/}
          </CardActions>
        </Card>
      </Fade>
    </div>
  );
}
