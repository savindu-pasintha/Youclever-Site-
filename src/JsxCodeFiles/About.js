import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: 350,
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
}));

export default function About() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="container-fluid" style={{ width: "90%" }}>
      <div
        className="row"
        style={{ width: "100%", position: "relative", top: "430px",paddingLeft:"8%" }}
      >
        <div className="col-md-4 col-sm-12" style={{ width: "33%" }}>
          <Card className={classes.root}>
            <svg
              aria-hidden="true"
              class="fc-orange-500 svg-spot spotNetwork"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                d="M26 11a3 3 0 100-6 3 3 0 000 6zm0 36a3 3 0 100-6 3 3 0 000 6zm19-12a3 3 0 11-6 0 3 3 0 016 0zm-3-15a3 3 0 100-6 3 3 0 000 6zm-29-3a3 3 0 11-6 0 3 3 0 016 0zm-3 21a3 3 0 100-6 3 3 0 000 6zm19-12a3 3 0 11-6 0 3 3 0 016 0z"
                opacity=".2"
              ></path>
              <path d="M10.98 35.67l9.23 5.04a4 4 0 107.4-.45l9.11-4.97A4 4 0 1041 29.13V18.87a4 4 0 10-3.22-7.2l-9.82-6.24a4 4 0 00-7.92 0l-9.82 6.24A4 4 0 107 18.87v10.26a4 4 0 103.98 6.54zM24 4a2 2 0 110 4 2 2 0 010-4zm-3.24 17.66l-3.92-2.5 5.4-9.56c.25.11.5.2.76.27v10.26a4 4 0 00-2.24 1.53zm-5.61-3.57l-3.28-2.08a4 4 0 00-.3-2.82l8.77-5.58a4 4 0 00.36.65l-5.55 9.83zm-.99 1.74L9 28.97v-10.1a4 4 0 001.9-1.11l3.26 2.07zM10.7 30.04l5.16-9.13 4.17 2.65a4.05 4.05 0 000 .88l-9.12 5.8a4 4 0 00-.2-.2zm16.2-8.8a4 4 0 00-1.9-1.11v-10.1l5.16 9.14-3.26 2.07zm.98 1.75l3.28-2.08 5.45 9.65-8.73-5.55a4 4 0 000-2.02zm4.97-3.16l3.92-2.49A4 4 0 0039 18.87v10.26c-.26.06-.51.16-.75.27l-5.41-9.57zM26.69 8.96c.41-.38.75-.84.97-1.35l8.77 5.58a3.98 3.98 0 00-.4 2.25l-4.18 2.65-5.16-9.13zM25 27.87a4 4 0 001.9-1.11L35.14 32H25v-4.13zM23 32H11.87l8.89-5.66A4 4 0 0023 27.87V32zm-10.91 2H23v4.13a4 4 0 00-1.68.9L12.09 34zM10 33a2 2 0 11-4 0 2 2 0 014 0zm15 1h9.91l-8.63 4.71a3.98 3.98 0 00-1.28-.58V34zm1-10a2 2 0 11-4 0 2 2 0 014 0zm-16-9a2 2 0 11-4 0 2 2 0 014 0zm30 2a2 2 0 110-4 2 2 0 010 4zM22 42a2 2 0 114 0 2 2 0 01-4 0zm18-11a2 2 0 110 4 2 2 0 010-4z"></path>
            </svg>
            <CardContent>
              <div class="grid--cell">
                <h3 class="p-ff-roboto-slab-bold fs-title fc-black-700 mt24 mb12 mnh64 mrn24 wmx3">
                  Empower people to deliver outstanding results
                </h3>
                <p class="fs-body3 mb32">
                  Give people space to get their job done, support them when
                  they need it, and practice blameless accountability.
                </p>
              </div>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
        <div className="col-md-4 col-sm-12" style={{ width: "33%" }}>
          <Card className={classes.root}>
            <svg
              aria-hidden="true"
              class="fc-orange-500 svg-spot spotPeople"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                d="M13.5 28a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM7 30a1 1 0 011-1h11a1 1 0 011 1v5h11v-5a1 1 0 011-1h12a1 1 0 011 1v10a2 2 0 01-2 2H33v5a1 1 0 01-1 1H20a1 1 0 01-1-1v-5H8a1 1 0 01-1-1V30zm25-6.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zM24.5 34a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
                opacity=".2"
              ></path>
              <path d="M16.4 26.08A6 6 0 107.53 26C5.64 26.06 4 27.52 4 29.45V40a1 1 0 001 1h9a1 1 0 100-2h-4v-7a1 1 0 10-2 0v7H6v-9.55c0-.73.67-1.45 1.64-1.45H16a1 1 0 00.4-1.92zM12 18a4 4 0 110 8 4 4 0 010-8zm16.47 14a6 6 0 10-8.94 0A3.6 3.6 0 0016 35.5V46a1 1 0 001 1h14a1 1 0 001-1V35.5c0-1.94-1.64-3.42-3.53-3.5zM20 28a4 4 0 118 0 4 4 0 01-8 0zm-.3 6h8.6c1 0 1.7.75 1.7 1.5V45h-2v-7a1 1 0 10-2 0v7h-4v-7a1 1 0 10-2 0v7h-2v-9.5c0-.75.7-1.5 1.7-1.5zM42 22c0 1.54-.58 2.94-1.53 4A3.5 3.5 0 0144 29.45V40a1 1 0 01-1 1h-9a1 1 0 110-2h4v-7a1 1 0 112 0v7h2v-9.55A1.5 1.5 0 0040.48 28H32a1 1 0 01-.4-1.92A6 6 0 1142 22zm-2 0a4 4 0 10-8 0 4 4 0 008 0z"></path>
              <path
                d="M17 10a1 1 0 011-1h12a1 1 0 110 2H18a1 1 0 01-1-1zm1-5a1 1 0 100 2h12a1 1 0 100-2H18zm-4-4a1 1 0 00-1 1v12a1 1 0 001 1h5.09l4.2 4.2a1 1 0 001.46-.04l3.7-4.16H34a1 1 0 001-1V2a1 1 0 00-1-1H14zm1 12V3h18v10h-5a1 1 0 00-.75.34l-3.3 3.7-3.74-3.75a1 1 0 00-.71-.29H15z"
                opacity=".35"
              ></path>
            </svg>
            <CardContent>
              <div class="grid--cell">
                <h3 class="p-ff-roboto-slab-bold fs-title fc-black-700 mt24 mb12 mnh64">
                  Keep community at our center
                </h3>
                <p class="fs-body3 mb32">
                  Community is at the heart of everything we do. Nurture healthy
                  communities where everyone is encouraged to learn and give
                  back.
                </p>
              </div>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
        <div className="col-md-4 col-sm-12" style={{ width: "33%" }}>
          <Card className={classes.root}>
            <svg
              aria-hidden="true"
              class="fc-orange-500 svg-spot spotMetrics"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              style={{ color: "orange" }}
            >
              <path
                d="M43.5 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm-28 13a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm-8 22a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM36 28.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
                opacity=".2"
              ></path>
              <path d="M37.2 5.5a4.3 4.3 0 113.36 4.2l-6.44 13.38a4.3 4.3 0 11-6.93 3.33l-.02-.02-9.98-5.67a4.3 4.3 0 01-4.1 2.07l-5.2 14.13a4.3 4.3 0 11-1.49-.63l5.13-13.96a4.3 4.3 0 116.22-3.15l9.81 5.58a4.3 4.3 0 015.12-2.4l6.4-13.3a4.3 4.3 0 01-1.89-3.56zm4.3-2.7a2.7 2.7 0 100 5.4 2.7 2.7 0 000-5.4zm-28 13a2.7 2.7 0 100 5.4 2.7 2.7 0 000-5.4zm-8 22a2.7 2.7 0 100 5.4 2.7 2.7 0 000-5.4zm23.3-11.3a2.7 2.7 0 105.4 0 2.7 2.7 0 00-5.4 0z"></path>
            </svg>
            <CardContent>
              <div class="grid--cell">
                <h3 class="p-ff-roboto-slab-bold fs-title fc-black-700 mt24 mb12 mnh64">
                  Learn, share, <br /> grow
                </h3>
                <p class="fs-body3 mb32">
                  Adopt a Growth Mindset. Be curious and eager to learn. Aim for
                  ethical, sustainable, long-term growth, both personally and in
                  the company.
                </p>
              </div>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      </div>
      <div style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
}
