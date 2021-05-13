import ViewQuestionsAndAnswers from "./ViewQuestionAndAnsers";
import firebase from "../Firbase_FireStore_Database/firebase";
import React, { useEffect, useState } from "react";

export default function ViewQuestionLoop() {
  const [que, setQue] = useState({ dataset: {}, array: {} });
  const [user, setUser] = useState({ datasetUser: {}, userArr: [] });
  const [img, setImg] = useState({ datasetImg: {}, imgArr: [] });

  const fetchDataQuestion = async () => {
    const db = firebase.firestore();
    var docRef = await db.collection("DeveloperDB").doc("Question");
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          var a = doc.data(); //json array data read
          setQue({
            ...que,
            dataset: a,
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

  //page onload time render one time method

  useEffect(() => {
    fetchDataQuestion();
    fetchDataUserImage();
    fetchDataUser();
  }, []);

  //
  var arrayname = que.dataset;
  var x = "";
  x = Object.values(arrayname); //object{} convert as a array []
  //
  //var imm = img.imgArr; //console.log("2-Images-", img.imgArr); //[]
  //var uss = user.userArr; //console.log("1-user dataset-", user.userArr);
  // console.log("7---", user.datasetUser["f"]); //{}
  var lenth = "";
  //lenth = x.length();
  const items = x.map((d) => {
    var name = "";
    var image = "";
    var job = "";
    try {
      // console.log("user id-", d.userId);
      // console.log("7---", user.datasetUser[d.userId]); //{}
      //  console.log("8---", img.datasetImg[d.userId].portfolioMainImg); //{}
      name = user.datasetUser[d.userId].lastName;
      image = img.datasetImg[d.userId].portfolioMainImg;
      job = user.datasetUser[d.userId].jobTitle;

      // console.log(name);
    } catch (e) {
      console.log(e);
    }

    return (
      <div>
        <ViewQuestionsAndAnswers
          id={d.id}
          filename={d.filename}
          content={d.content}
          language={d.language}
          question={d.question}
          technology={d.technology}
          userid={d.userId}
          job={job}
          name={name}
          image={image}
          questionslength={lenth}
        />
        <br /> <br /> <br />
      </div>
    );
  });

  return <div>{items}</div>;
}
