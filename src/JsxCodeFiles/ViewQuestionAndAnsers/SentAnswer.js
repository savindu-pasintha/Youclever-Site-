import React from "react";

import Button from "@material-ui/core/Button";

/**-----------According */
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import PlusOneIcon from "@material-ui/icons/PlusOne";
import MessageIcon from "@material-ui/icons/Message";
import SendIcon from "@material-ui/icons/Send";

import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

import firebase from "../Firbase_FireStore_Database/firebase";

import Cookies from "js-cookie";
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

export default function SentAnswer(props) {
  /*------According---------*/
  const classesAccording = useStylesAcording();

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
    var x = localStorage.getItem("sn");//Cookies.get("Signupusername");
    var l = x.length;
    var user = x.slice(0, l - 10);

    if (x !== "") {
      if (val.message !== "") {
        const db = firebase.firestore();
        var x = 0; // this variable passs to [x] inside
        x = Math.round(Math.random() * 100000);
        var q = props.answerId; // answer id question id tablename
        db.collection("DeveloperDB")
          .doc("Answer")
          .update({
            [q]: {
              id: x,
              questionId: q,
              answer: val.message,
              userId: user,
            },
          })
          .then(() => {
            //
            alert("Ok");
            //empty feild
            setVal({
              message: " ",
            });
            //
            // handleChangeMessage("panel1Message");
          })
          .catch((error) => {
            console.error("Error writing Document: ", error);
          });
      } else {
        alert("Please enter Answer");
      }
    } else {
      alert("Please SignUp First !");
    }
  };

  return (
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
                height: "auto",
                display: "inline-block",
                position: "relative",
                bottom: "50px",
              }}
            >
              <TextField
                label=" Give Your Answer"
                value={val.message}
                multiline
                rowsMax={15}
                onChange={getmessage}
                type="text"
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
  );
}
