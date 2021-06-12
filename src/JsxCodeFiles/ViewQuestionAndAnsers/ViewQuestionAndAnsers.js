import React from "react";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";

/**-----------According */
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

/*-----Profile hover---*/
import Popover from "@material-ui/core/Popover";

/*----------Lisst to -----------------*/
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import CircularProgress from "@material-ui/core/CircularProgress";

import { makeStyles } from "@material-ui/core/styles";

import firebase from "../Firbase_FireStore_Database/firebase";

import SentAnswer from "./SentAnswer";

import ViewAnswer from "./ViewAnswer";

import Photo from "./my.jpg";

const useStyles = makeStyles({
  root: {
    width: "90%",
    height: "auto",
    background: "#77acf1",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
});

/**--------According----- */
const useStylesAcording = makeStyles((theme) => ({
  root: {
    width: "95%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

/**--------------Profile Hover-------------- */
const useStylesProfileHover = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));
/*------------------list inside profileHover----------------*/
const useStylesList = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ViewQuestionAndAnswers(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  /*------According---------*/
  const classesAccording = useStylesAcording();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  /*-------------Profile Hover-------------*/
  const classesProfileHover = useStylesProfileHover();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  /*----------------List----------------*/
  const classesList = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  /*---------------------*/
  /*------According expange message box---------*/
  const [expandedMessage, setExpandedMessage] = React.useState(false);
  const handleChangeMessage = (panel) => (event, isExpanded) => {
    setExpandedMessage(isExpanded ? panel : false);
  };
  /*-----------sent answer--message form-------------*/
  const [val, setVal] = React.useState({
    message: "",
  });
  const getmessage = (e) => {
    setVal({
      ...val,
      message: e.target.value,
    });
  };
  const preventrefresh = (e) => {
    e.preventDefault();
  };
  const messagedatasubmit = () => {
    if (val.message !== "") {
      const db = firebase.firestore();
      var x = 0; // this variable passs to [x] inside
      x = Math.round(Math.random() * 100000);
      var q = props.id; // answer id question id tablename
      /**
        [q]: {
            id: x,
            questionId: props.id,
            answer: val.message,
          },
       */
      db.collection("DeveloperDB")
        .doc("Answer")
        .update({
          [x]: {
            [q]: {
              id: x,
              questionId: props.id,
              answer: val.message,
            },
          },
        })
        .then(() => {
          alert("Ok");
          //empty feild
          setVal({
            message: " ",
          });
        })
        .catch((error) => {
          console.error("Error writing Document: ", error);
        });
    } else {
      alert("Please enter Answer");
    }
  };

  return (
    <div>
      <div
        style={{
          width: "90%",
          height: "auto",
          background: "white",
          borderRadius: "20px",
          position: "relative",
          justifyContent: "center",
          top: "20px",
          margin: "auto",
        }}
      >
        <ul style={{ listStyle: "none", width: "100%", height: "auto" }}>
          <li
            style={{
              display: "inline-flex",
              width: "95%",
              height: "auto",
              border: "0px solid black",
              borderRadius: "50px",
              position: "relative",
              top: "20px",
            }}
            onMouseLeave={handlePopoverClose}
          >
            <Button style={{ width: "auto", height: "70px" }} color="none">
              <FavoriteSharpIcon
                style={{ color: "orange", fontSize: "45px" }}
                onClick={(e) => {}}
              />
            </Button>

            <p style={{ color: "blue", fontSize: "25px" }}>{32}</p>
            <img
              style={{
                padding: "10px",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
              src={props.image ||  Photo }
              alt="imagke"
              onMouseEnter={handlePopoverOpen}
            />
            <p
              style={{
                fontSize: "20px",
                fontWeight: "400",
                padding: "10px",
              }}
            >
              <span
                style={{
                  color: "black",
                }}
              >
                {" "}
                {props.id}
              </span>
              <span
                style={{
                  color: "red",
                }}
              >
                {" "}
                {props.filename}
              </span>
              <span
                style={{
                  color: "blue",
                }}
              >
                {" "}
                {props.language}
              </span>
              <span
                style={{
                  color: "green",
                }}
              >
                {" "}
                {props.technology}
              </span>
              <br />
              <span
                style={{
                  color: "black",
                  fontSize: "28px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                {props.question}
              </span>
              <br />
              <span> {props.content}</span>
              <br /> <br />
            </p>
          </li>
        </ul>
      </div>
      {/*---------------------questions-----------------------*/}
      {/**------------------------Answers--------------------- */}
      <div
        style={{
          width: "90%",
          height: "auto",
          background: "#fcecdd",
          borderRadius: "20px",
          position: "relative",
          justifyContent: "center",
          top: "50px",
          left: "30px",
          margin: "auto",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "auto",
            position: "relative",
            top: "0px",
          }}
        >
          <ul style={{ listStyle: "none", width: "100%", height: "auto" }}>
            <section>
              <ViewAnswer />


              
              {/**---------------------------------------- */}
              <SentAnswer answerId={props.id} />
              {/**---------------------------------------- */}
            </section>
          </ul>
        </div>
      </div>
      {/*------------------profilr hover-----------------------*/}
      {/*-------ProfileHover-----------*/}
      <div>
        <Popover
          id="mouse-over-popover"
          className={classesProfileHover.popover}
          classes={{
            paper: classesProfileHover.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
          style={{
            width: "300px",
            height: "auto",
            padding: "0px",
            margin: "0px",
          }}
        >
          <div
            className={classesList.root}
            style={{
              width: "250px",
              height: "auto",
              borderRadius: "30px",
              background: "white",
              padding: "0px",
              margin: "0px",
            }}
          >
            <List component="nav">
              <ListItem button>
                <ListItemText primary="Q 48" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="A  21" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <CircularProgress />
                </ListItemIcon>
                <ListItemText primary="Hire me" />
              </ListItem>
              <ListItem button>
                <ListItemText primary={props.job} />
                <ListItemIcon>
                  <CircularProgress
                    style={{ color: "green", fontSize: "12px" }}
                  />
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemText primary="React Native" />
                <ListItemIcon>
                  <CircularProgress
                    style={{
                      color: "orange",
                      fontSize: "12px",
                    }}
                  />
                </ListItemIcon>
              </ListItem>
            </List>
          </div>
        </Popover>
      </div>
    </div>
  );
}
