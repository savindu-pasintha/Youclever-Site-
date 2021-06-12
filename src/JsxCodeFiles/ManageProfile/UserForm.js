import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import firebase from "../Firbase_FireStore_Database/firebase";
import Cookies from "js-cookie";
import { isEmptyArray } from "formik";

export default function UserForm(props) {
  const [val, setVal] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
  });

  //get username inoput tag wal onchange event ekedi eke ew gann 
  const geta = (e) => {
    setVal({
      ...val,
      a: e.target.value,
    });
  };
  const getb = (e) => {
    setVal({
      ...val,
      b: e.target.value,
    });
  };
  const getc = (e) => {
    setVal({
      ...val,
      c: e.target.value,
    });
  };
  const getd = (e) => {
    setVal({
      ...val,
      d: e.target.value,
    });
  };
  const gete = (e) => {
    setVal({
      ...val,
      e: e.target.value,
    });
  };
  const getf = (e) => {
    setVal({
      ...val,
      f: e.target.value,
    });
  };
  const getg = (e) => {
    setVal({
      ...val,
      g: e.target.value,
    });
  };
  const geth = (e) => {
    setVal({
      ...val,
      h: e.target.value,
    });
  };

  const isEmpty = (value)=>{
    var p = new Boolean(true);
    if(value.length === 0){p=new Boolean(false);}
    return p;
  }
  const addbtn = () => {
    const db = firebase.firestore();
    var x = localStorage.getItem("sn");//Cookies.get("Signupusername");
   
    if (x !== "") {

      if(isEmpty(val.a) && isEmpty(val.b)  && isEmpty(val.c)  && isEmpty(val.d ) && isEmpty(val.e ) && isEmpty(val.h)){

      //  alert(x);
      var l = x.length;
      var id = x.slice(0, l - 10);
      // id = "2";
      //db.collection("name").add(); this method can not add document to collection
      db.collection("DeveloperDB")
        .doc("user")
        .update({
          [id]: {
            firstName: val.a,
            lastName: val.b,
            jobTitle: val.c,
            workExperience: val.d,
            aboutUsName: val.e,
            aboutUsDescription: val.f,
            profesionalDescription: val.f,
          },
        })
        .then(() => {
          alert("Document successfully Written.");
        })
        .catch((error) => {
          console.error("Error writing Document: ", error);
        });

      } else {
        alert("Please Enter Values !");
      }
    } else {
      alert("Please SignUp first !");
    }

  };
  const updatebtn = () => {
    const db = firebase.firestore();

    var x = localStorage.getItem("sn");//Cookies.get("Signupusername");// cookie eke var x = example@gmail.com; ok store wenne

    if (x !== "") {

      
      if(val.a !=="" && val.b !== "" && val.c !=="" && val.d !=="" && val.e !=="" && val.h !==""){

      // alert(x);
      var l = x.length;//lenth is a method 
      //id [e,x.a,m,p,l,e,@,g,m,a,i,l,.,c,o,m]
      //id [0,1,2,3,4,5,6,7,8,9,10]
      // x = example@gmail.com;
      // l= 15; digak oya
      // 10  =  @gmail.com oke diga akuru gana
      // l-10= 15-10=5
      var id = x.slice(0, l - 10); //remove the last 9 charactore for @gmail.com
      //id = "2";
      db.collection("DeveloperDB")
        .doc("user")
        .update({
          [id]: {
            firstName: val.a,
            lastName: val.b,
            jobTitle: val.c,
            workExperience: val.d,
            aboutUsName: val.e,
            aboutUsDescription: val.f,
            profesionalDescription: val.f,
          },
        })
        .then(() => {
          alert("Document successfully Updated .");
        })
        .catch((error) => {
          console.error("Error Updating document: ", error);
        });

      } else {
        alert("Please Enter Values !");
      }
    
    } else {
      alert("Please SignUp first !");
    }
  
  };
  const deletebtn = () => {
    const db = firebase.firestore();
    db.collection("DeveloperDB")
      .doc("user")
      .delete()
      .then(() => {
        alert("Document successfully Deleted .");
      })
      .catch((error) => {
        console.error("Error Deleting document: ", error);
      });
  };
  const onsubmitpreventrefresh = (e) => {
    e.preventDefault();
  };

  //cancel the refresh page

  return (
    <div>
      <form
        onSubmit={onsubmitpreventrefresh}
        className="text-center"
        style={{
          width: "100%",
        }}
      >
         <TextField
          onChange={geta}
          required
          type="text"
          autoFocus
          margin="dense"
          id="inputEmail"
          label="1- Fist Name : Supun"
          fullWidth
        />
        <TextField
          onChange={getb}
          required
          type="text"
          autoFocus
          margin="dense"
          id="inputEmail"
          label="2- Last Name : Sulakshana"
          fullWidth
        />
        <TextField
          onChange={getc}
          required
          type="text"
          autoFocus
          margin="dense"
          id="inputEmail"
          label="3- Job Title  : React Developer"
          fullWidth
        />
        <TextField
          onChange={getd}
          required
          type="text"
          autoFocus
          margin="dense"
          id="inputEmail"
          label="4- Work experience  : 3 years"
          fullWidth
        />
        <TextField
          onChange={gete}
          required
          type="text"
          autoFocus
          margin="dense"
          id="inputEmail"
          label="5- About US Name : Supun Sulakshana"
          fullWidth
        />

        <TextField
          onChange={getf}
          required
          type="text"
          autoFocus
          margin="dense"
          id="inputEmail"
          label="7- About US Description : I'm a Fullstack Software Developer in kaluthara, Sri Lanka. I have serious passion for UI effects, animations "
          fullWidth
          multiline
          rows="2"
          rowsMax={15}
        />
        <TextField
          onChange={getg}
          required
          type="text"
          autoFocus
          margin="dense"
          id="inputEmail"
          label="8- Profesional Skill Description : I have most experince in react development technologies."
          fullWidth
          multiline
          rows="2"
          rowsMax={15}
        />

        <Button
          onClick={addbtn}
          className="btn btn-lg btn-primary btn-block text-uppercase"
          type="submit"
          style={{
            position: "relative",
            padding: "15px",
            marginTop: "50px",
            backgroundColor: "orange",
            width: "250px",
            borderRadius: "50px",
            color: "white",
          }}
        >
          Add
        </Button>
        <Button
          onClick={updatebtn}
          className="btn btn-lg btn-primary btn-block text-uppercase"
          type="submit"
          style={{
            position: "relative",
            padding: "15px",
            marginTop: "50px",
            backgroundColor: "green",
            width: "250px",
            borderRadius: "50px",
            color: "white",
          }}
        >
          Update
        </Button>
      </form>
    </div>
  );
}
