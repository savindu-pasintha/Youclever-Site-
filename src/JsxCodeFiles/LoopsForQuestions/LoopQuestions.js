import React, { useState, useEffect } from "react";
import firebase from "../Firbase_FireStore_Database/firebase";
import SampleLoopQuestions from "./SampleLoopQuestions";

import Slide from "react-reveal/Slide";

function LoopQuestions() {
  const [v, setV] = useState({ dataset: {} });

  const fetchDataQuestion = async () => {
    const db = firebase.firestore();
    var docRef = db.collection("DeveloperDB").doc("Question");
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          var a = doc.data(); //json array data read
          setV({
            ...v,
            dataset: a,
          });
         // console.log("Document data:", a);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  //page onload time render one time method
  useEffect(() => {
    fetchDataQuestion();
  }, []);

  var arrayname = v.dataset;
  var x = Object.values(arrayname); //object{} convert as a array []
  
  const items = x.map((d) => {
    // d."arrayInadexName"
    return (
      <div>
        <Slide left>
          <SampleLoopQuestions id={d.id} question={d.question}  />
        </Slide>
      </div>
    );
  });

  return <div>{items}</div>;
}
export default LoopQuestions;
