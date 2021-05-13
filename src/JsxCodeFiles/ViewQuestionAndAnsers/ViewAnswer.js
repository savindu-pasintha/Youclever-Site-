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

export default function ViewAnswer() {
  const classes = useStyles();
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

  const [ans, setAns] = React.useState({ answer: {} });
  const [user, setUser] = React.useState({ datasetUser: {}, userArr: [] });
  const [img, setImg] = React.useState({ datasetImg: {}, imgArr: [] });

  //fetchdata()

  React.useEffect(() => {
    const fetchDataAnswersfun = async () => {
      const db = firebase.firestore();
      var docRef = await db.collection("DeveloperDB").doc("Answer");
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            var a = doc.data(); //json array data read
            //  console.log("aa", doc.data());
            setAns({
              ...ans,
              answer: a,
            });
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    };
    const fetchDataUserImage = async () => {
      const db = firebase.firestore();
      var docRef = await db.collection("DeveloperDB").doc("Images");
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            var a = doc.data(); //json array data read
            var b = Object.values(doc.data()); // {} to [] convert
            setImg({
              ...img,
              datasetImg: a,
              imgArr: b,
            });
            //  console.log("Document data:", a);
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    };

    const fetchDataUser = async () => {
      const db = firebase.firestore();
      var docRef = await db.collection("DeveloperDB").doc("user");
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            var a = doc.data(); //json array data read
            var b = Object.values(a); //{} to [] convert
            setUser({
              ...user,
              datasetUser: a,
              userArr: b,
            });
            //  console.log("Document data:", a);
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    };
    fetchDataAnswersfun();
    fetchDataUserImage();
    fetchDataUser();
    //page onload time render one time method
  }, [ans]); ///use effect end

  var arr = Object.values(ans.answer);
  // console.log(arr[0]);
  const items = arr.map((d) => {
    var name = "  Hellow I'm Savindu.." + d.id;
    var answer = "";
    var answerParagraph = d.answer;
    var image = "";
    var job = "";
    try {
      name = user.datasetUser[d.userId].firstName;
      image = img.datasetImg[d.userId].portfolioMainImg;
      job = user.datasetUser[d.userId].jobTitle;
    } catch (e) {
      console.log(e);
    }
    // console.log("d---------", d);

    return (
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
            style={{ color: "blue", fontSize: "45px" }}
            onClick={(e) => {}}
          />
        </Button>
        <p style={{ color: "black", fontSize: "25px" }}>{""}</p>

        <img
          style={{
            padding: "10px",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
          }}
          src={image}
          alt="imagke"
          onMouseEnter={handlePopoverOpen}
        />

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
                  <ListItemText primary="Q 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="A  1" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <CircularProgress />
                  </ListItemIcon>
                  <ListItemText primary="Hire me" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="javaScript" />
                  <ListItemIcon>
                    <CircularProgress
                      style={{ color: "green", fontSize: "12px" }}
                    />
                  </ListItemIcon>
                </ListItem>
                <ListItem button>
                  <ListItemText primary={job} />
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

        <div
          style={{
            width: "100%",
            height: "auto",
            background: "none",
            borderRadius: "10px",
            margin: "auto",
          }}
        >
          <div className={classesAccording.root}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <br />
                <Typography className={classes.heading}>{name}</Typography>
                <Typography className={classes.secondaryHeading}>
                  {answer}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p>{answerParagraph}</p>
                </Typography>
              </AccordionDetails>
              <div
                style={{
                  position: "relative",
                  display: "inline-flex",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Button
                  style={{
                    position: "relative",
                    left: "100%",
                    background: "none",
                    borderRadius: "50%",

                    width: "auto",
                    height: "auto",
                    textAlign: "center",
                    top: "5px",
                  }}
                >
                  <HighlightOffIcon
                    style={{
                      color: "blue",
                      fontSize: "45px",
                      position: "relative",
                      left: "1%",
                    }}
                  />
                </Button>
              </div>
            </Accordion>
          </div>
        </div>
      </li>
    );
  });

  return <div>{items}</div>;
}
