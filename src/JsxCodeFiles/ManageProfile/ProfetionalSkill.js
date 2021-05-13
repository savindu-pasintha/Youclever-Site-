import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import firebase from "../Firbase_FireStore_Database/firebase";

import Cookies from "js-cookie";

export default function ProfetionalSkill(props) {
  const [val, setVal] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
  });

  //get username
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
  const addbtn = () => {
    var x = Cookies.get("Signupusername");
    if (x !== "") {
      //  alert(x);

      var l = x.length;
      var id = x.slice(0, l - 10);

      const db = firebase.firestore();
      //db.collection("name").add(); this method can not add document to collection
      db.collection("DeveloperDB")
        .doc("skill")
        .update({
          [id]: {
            one: val.a,
            two: val.b,
            three: val.c,
            four: val.d,
            five: val.e,
            six: val.f,
            seven: val.g,
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
    var x = Cookies.get("Signupusername");
    if (x !== "") {
      //  alert(x);

      var l = x.length;
      var id = x.slice(0, l - 10);

      const db = firebase.firestore();
      db.collection("DeveloperDB")
        .doc("skill")
        .update({
          [id]: {
            one: val.a,
            two: val.b,
            three: val.c,
            four: val.d,
            five: val.e,
            six: val.f,
            seven: val.g,
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
          label="1- Java"
          fullWidth
        />
        <TextField
          onChange={getb}
          required
          type="text"
          autoFocus
          margin="dense"
          id="inputEmail"
          label="2- C#"
          fullWidth
        />
        <TextField
          onChange={getc}
          required
          type="text"
          autoFocus
          margin="dense"
          id="inputEmail"
          label="3- ReactNative with javascript"
          fullWidth
        />
        <TextField
          onChange={getd}
          required
          type="text"
          autoFocus
          margin="dense"
          id="inputEmail"
          label="4- HTML Css & Boostrap"
          fullWidth
        />

        <TextField
          onChange={gete}
          required
          type="text"
          autoFocus
          margin="dense"
          id="inputEmail"
          label="5- Wordpress"
          fullWidth
        />
        <TextField
          onChange={getf}
          required
          type="text"
          autoFocus
          margin="dense"
          id="inputEmail"
          label="6- ReactJs "
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
          label="7- AWS MYSQL SSQL EXPRESS"
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
