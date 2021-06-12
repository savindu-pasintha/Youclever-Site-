import React, { useState, useEffect } from "react";
import firebase from "../Firbase_FireStore_Database/firebase";
import Cookies from "js-cookie";
import SampleDevelopers from "./SampleDevelopers";

function Developers() {
  const [v, setV] = useState({ dataset: {}, index: 0 });

  const fetchDataUser = async (collection, document) => {
    var x = localStorage.getItem("sn");//Cookies.get("Signupusername");

    if (x !== "x") {
      // alert(x);
      var l = x.length;
      var id = x.slice(0, l - 10);
      const db = firebase.firestore();
      var docRef = await db.collection(collection).doc(document);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            var b = doc.data(); //json array data read
            // var a = b[id];
            setV({
              ...v,
              dataset: b,
            });
            // var arr = Object.values(doc.data()); //json obj convert to array js
            // setArrayd(arr);
            // console.log("developer Document data:", b);
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    }
  };

  const [img, setImg] = React.useState({ datasetImg: {}, imgArr: [] });

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
          console.log("Document data images:", a);
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
    // alert("Hai ");
    fetchDataUser("DeveloperDB", "user");
    fetchDataUserImage();
  }, []);


  var arrayname = v.dataset;
  var x = Object.values(arrayname); //object{} convert as a array []
  var keyArray = Object.keys(arrayname); //keys get
  let n = 0;

  const items = x.map((d) => {
    var image = "";
    try {
      image = img.datasetImg[d.userId].portfolioMainImg.toString();
      // console.log("developer---------", image);
    } catch (e) {
      console.log(e);
    }

    return (
      <div className="col-sm-12 col-md-4 col-lg-4" style={{ width: "100%" }}>
        <SampleDevelopers
          id={keyArray[n++] + "@gmail.com"}
          name={d.firstName + " " + d.lastName}
          job={d.jobTitle}
          experience={d.workExperience}
          about={d.aboutUsDescription}
          image={image}
        />
      </div>
    );
  });

  return (
    <div className="row" style={{ width: "100%", position:"relative",paddingLeft:"5%" }}>
      {items}
    </div>
  );
}
export default Developers;
