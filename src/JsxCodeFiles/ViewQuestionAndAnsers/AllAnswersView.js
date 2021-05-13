import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import ViewQuestionLoop from "./ViewQuestionLoop";

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

export default function AllAnswersView() {
  const classes = useStyles();

  /*-------------message form-------------*/
  const [val, setVal] = React.useState({
    Qn: "10",
    An: "45",
  });
  /*--------------------------------*/
  React.useEffect(() => {
    fetchDataQue();
    fetchDataans();
  });

  const fetchDataQue = async () => {
    try {
      const db = firebase.firestore();
      var docRef = db.collection("DeveloperDB").doc("Question");
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            var n = doc.data(); //json array data read
            var a = Object.values(n);
            //console.log("length --qn", a.length);
            setVal({ ...val, Qn: a.length });
            //  console.log("Document data:", a);
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    } catch (e) {
      console.log(e);
    }
  };
  const fetchDataans = async () => {
    try {
      const db = firebase.firestore();
      var docRef = db.collection("DeveloperDB").doc("Answer");
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            var n = doc.data(); //json array data read
            var a = Object.values(n);
            setVal({ ...val, An: a.length });
            //  console.log("Document data:", a);
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    } catch (e) {
      console.log(e);
    }
  };

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
                {val.Qn /**99 */}
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
                  {val.An /*186 */}
                </p>
              </div>
            </div>

            {/*-------------------------Question amd answers--------------------- */}
            <ViewQuestionLoop />
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <div style={{ width: "100%", height: "100px" }}></div>
      </div>
    </div>
  );
}
