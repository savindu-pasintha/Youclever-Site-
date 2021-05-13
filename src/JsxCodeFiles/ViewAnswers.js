import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
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
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

import PlusOneIcon from "@material-ui/icons/PlusOne";
import MessageIcon from "@material-ui/icons/Message";
import SendIcon from "@material-ui/icons/Send";

import TextField from "@material-ui/core/TextField";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import CircularProgress from "@material-ui/core/CircularProgress";



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

function ViewAnswers() {
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
  /*-------------message form-------------*/
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
  const messagedatasubmit = () => {};
  /*--------------------------------*/
  return (
    <div className="ViewAnswers">
      <div
        style={{
          width: "100%",
          height: "100%",
          top: "100px",
          position: "relative",
          left: "5%",
        }}
      >
        <Card className={classes.root} style={{ borderRadius: "50px" }}>
          <CardContent>
            <div
              style={{
                width: "250px",
                height: "60px",
                background: "#ffe9d6",
                borderRadius: "50px",
                textAlign: "center",
                display: "inline-flex",
              }}
            >
              <h
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "#04009a",
                  textAlign: "center",
                  position: "relative",
                  left: "10px",
                }}
              >
                Questions
              </h>
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "900",
                  color: "black",
                  position: "relative",
                  left: "50px",
                }}
              >
                {99}
              </p>
            </div>
            {/**------------------------b--------------------- */}
            <div
              style={{
                width: "100%",
                height: "75px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "75px",
                  background: "",
                  borderRadius: "50px",
                  position: "relative",
                  display: "inline-flex",
                  top: "30px",
                  left: "70%",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                <h
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: "black",
                    textAlign: "center",
                    position: "relative",
                    left: "0px",
                  }}
                >
                  Answers
                </h>
                <p
                  style={{
                    fontSize: "40px",
                    fontWeight: "900",
                    color: "#ce1f6a",
                    position: "relative",
                    left: "50px",
                  }}
                >
                  {189}
                </p>
              </div>
            </div>

            {/*-------------------------Question--------------------- */}
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
                  <Button
                    style={{ width: "auto", height: "70px" }}
                    color="none"
                  >
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
                    src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"
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
                    oggles between these classes accordion__item--open and the
                    components I am creating uses REACT HOOKS. Disclaimer: this
                    is my first time creating an issue, so please bear with me.
                    So I am trying to create an accordion component which
                    toggles between these classes accordion__item--open and
                    accordion__item to open and close.o react and I am trying to
                    create a react library of components and I came across this
                    problem because one of the components I am creating uses
                    REACT HOOKS. Disclaimer: this is my first time creating an
                    issue, so please bear with me. So I am trying to create an
                    accordion component which toggles between these classes
                    accordion__item--open and accordion__item to open and close.
                  </p>
                </li>
              </ul>
            </div>
            {/*------------------------------------------------------*/}
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
                <ul
                  style={{ listStyle: "none", width: "100%", height: "auto" }}
                >
                  <section>
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
                      <Button
                        style={{ width: "auto", height: "70px" }}
                        color="none"
                      >
                        <FavoriteSharpIcon
                          style={{ color: "blue", fontSize: "45px" }}
                          onClick={(e) => {}}
                        />
                      </Button>
                      <p style={{ color: "black", fontSize: "25px" }}>{12}</p>

                      <img
                        style={{
                          padding: "10px",
                          borderRadius: "50%",
                          width: "100px",
                          height: "100px",
                        }}
                        src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"
                        alt="imagke"
                        onMouseEnter={handlePopoverOpen}
                      />
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
                                <ListItemText primary="javaScript" />
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

                      {/*-------ProfileHover-----------*/}
                      <div
                        style={{
                          width: "100%",
                          height: "auto",
                          background: "none",
                          borderRadius: "10px",
                          margin: "auto",
                        }}
                      >
                        {/**-----Expand According---------- */}
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
                              <Typography className={classes.heading}>
                                Hellow I'm Savindu..
                              </Typography>
                              <Typography className={classes.secondaryHeading}>
                                Hey, Supun You did It, like this..
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                <p>
                                  Steps to reproduce clone
                                  https://github.com/sethandleah/react-lib clone
                                  https://github.com/sethandleah/myapp cd
                                  react-lib npm install npm link cd ../myapp npm
                                  i npm link react-lib npm start Expected
                                  behavior It should show a button with a "plus"
                                  svg sign and the words "Hello" and "World"
                                  respectively Open devtools and go to elements
                                  When clicking on the button the class
                                  accordion_item--open should toggle To see the
                                  above, do the following: Uncomment these lines
                                  at myapp/src/App.js import Accordion from
                                  './Accordion'; import AccordionItem from
                                  './AccordionItem'; The comment out these line,
                                  alse at myapp/src/App.js: import from
                                  'react-lib'; import from 'react-lib'; Versions
                                  of React, Browser / OS are affected by this
                                  issue: React and React-Dom: both are ^16.8.6
                                  on both react-lib and the myapp Browser: Brave
                                  Version 0.61.52 Chromium: 73.0.3683.86
                                  (Official Build) (64-bit) OS: MacOS High Siera
                                  Version 10.13.6 (17G5019)clicking on the
                                  button the class accordion_item--open should
                                  toggle To see the above, do the following:
                                  Uncomment these lines at myapp/src/App.js
                                  import Accordion from './Accordion'; import
                                  AccordionItem from './AccordionItem'; The
                                  comment out these line, alse at
                                  myapp/src/App.js: import from 'react-lib';
                                  import from 'react-lib'; Versions of React,
                                  Browser / OS are affected by this issue: React
                                  and React-Dom: both are ^16.8.6 on both
                                  react-lib and the myapp Browser: Brave Version
                                  0.61.52 Chromium: 73.0.3683.86 (Official
                                  Build) (64-bit) OS
                                  https://github.com/sethandleah/react-lib clone
                                  https://github.com/sethandleah/myapp cd
                                  react-lib npm install npm link cd ../myapp npm
                                  i npm link react-lib npm start Expected
                                  behavior It should show a button with a "plus"
                                  svg sign and the words "Hello" and "World"
                                  respectively Open devtools and go to elements
                                  When clicking on the button the class
                                  accordion_item--open should toggle To see the
                                  above, do the following: Uncomment these lines
                                  at myapp/src/App.js import Accordion from
                                  './Accordion'; import AccordionItem from
                                  './AccordionItem'; The comment out these line,
                                  alse at myapp/src/App.js: import from
                                  'react-lib'; import from 'react-lib'; Versions
                                  of React, Browser / OS are affected by this
                                  issue: React and React-Dom: both are ^16.8.6
                                  on both react-lib and the myapp Browser: Brave
                                  Version 0.61.52 Chromium: 73.0.3683.86
                                  (Official Build) (64-bit) OS: MacOS High Siera
                                  Version 10.13.6 (17G5019)clicking on the
                                  button the class accordion_item--open should
                                  toggle To see the above, do the following:
                                  Uncomment these lines at myapp/src/App.js
                                  import Accordion from './Accordion'; import
                                  AccordionItem from './AccordionItem'; The
                                  comment out these line, alse at
                                  myapp/src/App.js: import from 'react-lib';
                                  import from 'react-lib'; Versions of React,
                                  Browser / OS are affected by this issue: React
                                  and React-Dom: both are ^16.8.6 on both
                                  react-lib and the myapp Browser: Brave Version
                                  0.61.52 Chromium: 73.0.3683.86 (Official
                                  Build) (64-bit) OS: MacOS High Siera Version
                                  10.13.6 (17G5019)
                                </p>
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

                    <section
                      style={{
                        position: "relative",
                        display: "inline-flex",
                        width: "100%",
                        height: "auto",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          left: "10%",
                          top: "50px",
                          width: "100px",
                          height: "100px",
                        }}
                      >
                        <MessageIcon />
                        <PlusOneIcon />
                      </div>
                      <div
                        className={classesAccording.root}
                        style={{
                          position: "relative",
                          left: "6%",
                          top: "50px",
                          width: "60%",
                          height: "auto",
                        }}
                      >
                        <Accordion
                          expanded={expandedMessage === "panel1Message"}
                          onChange={handleChangeMessage("panel1Message")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          ></AccordionSummary>
                          <AccordionDetails>
                            <form
                              noValidate
                              autoComplete="off"
                              onSubmit={preventrefresh}
                              style={{
                                width: "100%",
                                height: "100%",
                                display: "inline-block",
                                position: "relative",
                                bottom: "50px",
                              }}
                            >
                              <TextField
                                id="standard-multiline"
                                label="Type message"
                                multiline
                                rowsMax={15}
                                onChange={getmessage}
                                style={{ width: "90%", height: "auto" }}
                              />
                              <br />
                              <Button
                                style={{
                                  position: "relative",
                                  left: "90%",
                                  background: "none",
                                  borderRadius: "50%",

                                  width: "auto",
                                  height: "auto",
                                  textAlign: "center",
                                  top: "5px",
                                }}
                              >
                                <SendIcon
                                  onClick={messagedatasubmit}
                                  style={{
                                    color: "yellow",
                                    fontSize: "45px",
                                    position: "relative",
                                    left: "1%",
                                  }}
                                />
                              </Button>
                            </form>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                    </section>
                  </section>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <div style={{ width: "100%", height: "100px" }}></div>
      </div>
    </div>
  );
}

export default ViewAnswers;
