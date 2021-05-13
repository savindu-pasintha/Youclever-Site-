import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import LoopQuestions from "./LoopsForQuestions/LoopQuestions";
/*----------Button style---------*/

import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function AllQuestionsList() {
  const classes = useStyles();

  return (
    <div className="Developers">
      <div style={{ width: "100%", height: "100px" }}></div>

      <div style={{ width: "100%", height: "auto" }}>
        <Fade top>
          <h
            style={{
              fontSize: "45px",
              fontWeight: "900",
              position: "relative",
              left: "25%",
            }}
          >
            More Issues :
          </h>
        </Fade>
        <div
          style={{
            listStyle: "none",
            width: "100%",
            height: "auto",
            position: "relative",
            top: "40px",
          }}
        >
          <ul
            style={{
              listStyle: "none",
            }}
          >
            <LoopQuestions />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AllQuestionsList;
