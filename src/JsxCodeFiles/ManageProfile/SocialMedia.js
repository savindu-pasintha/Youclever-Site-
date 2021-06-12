import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import firebase from "../Firbase_FireStore_Database/firebase";
import Cookies from "js-cookie";

export default function SocialMedia() {
  //use state hook define to store variables
  //create user state
  const [val, setVal] = useState({
    email: "",
    linkedin: "",
    github: "",
    facebook: "",
    instergram: "",
    twiter: "",
  });

  //get username
  const getemail = (e) => {
    setVal({
      ...val,
      email: e.target.value,
    });
  };
  const getlinkedin = (e) => {
    setVal({
      ...val,
      linkedin: e.target.value,
    });
  };
  const getgithub = (e) => {
    setVal({
      ...val,
      github: e.target.value,
    });
  };
  const getfacebook = (e) => {
    setVal({
      ...val,
      facebook: e.target.value,
    });
  };
  const getinstergram = (e) => {
    setVal({
      ...val,
      instergram: e.target.value,
    });
  };
  const gettwiter = (e) => {
    setVal({
      ...val,
      twiter: e.target.value,
    });
  };

  const viewdb = () => {};

  const addbtn = () => {
    var x = localStorage.getItem("sn");//Cookies.get("Signupusername");
    if (x !== "") {
      // alert(x);
      var l = x.length;
      var id = x.slice(0, l - 10);

      const db = firebase.firestore();
      //db.collection("name").add(); this method can not add document to collection
      db.collection("DeveloperDB")
        .doc("link")
        .update({
          [id]: {
            email: val.email,
            linkedin: val.linkedin,
            github: val.github,
            instergram: val.instergram,
            facebook: val.facebook,
            twiter: val.twiter,
          },
        })
        .then(() => {
          alert("Document successfully Written.");
        })
        .catch((error) => {
          console.error("Error writing Document: ", error);
        });
    } else {
      alert("Please SignUp First !");
    }
  };
  const updatebtn = () => {
    var x = localStorage.getItem("sn");//Cookies.get("Signupusername");
    if (x !== "") {
      // alert(x);
      var l = x.length;
      var id = x.slice(0, l - 10);

      const db = firebase.firestore();
      db.collection("DeveloperDB")
        .doc("link")
        .update({
          [id]: {
            email: val.email,
            linkedin: val.linkedin,
            github: val.github,
            instergram: val.instergram,
            facebook: val.facebook,
            twiter: val.twiter,
          },
        })
        .then(() => {
          alert("Document successfully Updated .");
        })
        .catch((error) => {
          console.error("Error Updating document: ", error);
        });
    } else {
      alert("Please SignUp First !");
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
          onChange={getemail}
          required
          type="email"
          autoFocus
          margin="dense"
          id="inputEmail"
          label="1- Email"
          fullWidth
        />
        <TextField
          onChange={getlinkedin}
          required
          type="text"
          autoFocus
          margin="dense"
          id="inputEmail"
          label="2- LinkedIn"
          fullWidth
        />
        <TextField
          onChange={getgithub}
          required
          type="text"
          autoFocus
          margin="dense"
          id="inputEmail"
          label="3- GitHub"
          fullWidth
        />
        <TextField
          onChange={getfacebook}
          required
          type="text"
          autoFocus
          margin="dense"
          id="inputEmail"
          label="4- FaceBook"
          fullWidth
        />
        <TextField
          onChange={getinstergram}
          required
          type="text"
          autoFocus
          margin="dense"
          id="inputEmail"
          label="5- Instergram"
          fullWidth
        />
        <TextField
          onChange={gettwiter}
          required
          type="text"
          autoFocus
          margin="dense"
          id="inputEmail"
          label="6- Twiter"
          fullWidth
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
