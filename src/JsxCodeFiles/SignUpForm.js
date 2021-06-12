import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import InputLabel from "@material-ui/core/InputLabel";
import React, { useState } from "react";

import Cookies from "js-cookie";
import firebase from "./Firbase_FireStore_Database/firebase";

function SignUpForm(props) {
  const [openDialog, setOpenDialog] = React.useState(false);
  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  /*----------------------------------------- */
  const [val, setVal] = useState({
    username: "",
    password: "",
    comfrim: "",
    errors: {}, //store the errors in the input data
  });

  //
  const getusername = (e) => {
    setVal({
      ...val,
      username: e.target.value,
    });
  };
  const getpassword = (e) => {
    setVal({
      ...val,
      password: e.target.value,
    });
  };
  const getcomfrim = (e) => {
    setVal({
      ...val,
      comfrim: e.target.value,
    });
  };
  //cancel the refresh page
  const preventrefresh = (e) => {
    e.preventDefault();
  };
  //login ckeck fuction
  const regdatasubmit = () => {
    // alert(val.username + val.password + val.comfrim);
    // regDataSave();
    if (validate() === true && val.password === val.comfrim) {
      regDataSave();
      //add new value to result
      setVal({
        ...val,
        result: "Registered successfull",
      });
    } else {
      //add new value to result
      console.log("incorrect inputs");
    }
  };
  //validate Registration user enter data
  const validate = () => {
    let isValid = true; /// default is true
    let errors = {};
    if (!val.username) {
      isValid = false;
      errors["email"] = "Please enter your email.";
    }
    if (!val.password) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (!val.comfrim) {
      isValid = false;
      errors["comfrim"] = "Please enter comfrime password.";
    }

    if (typeof val.username !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(val.username)) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }
    //corrent error variable data equal to useState errors
    setVal({
      errors: errors,
    });

    return isValid;
  };
  //firestore to save
  const regDataSave = async () => {
    var x = val.username.toString();
    var l = x.length;
    var id = x.slice(0, l - 10); //remove the last 9 charactore for @gmail.com

    const db = firebase.firestore();
    //db.collection("name").add(); this method can not add document to collection
    await db
      .collection("DeveloperDB")
      .doc("Login")
      .update({
        [id]: {
          username: val.username,
          password: val.password,
          comfrim: val.comfrim,
        },
      })
      .then(() => {
        alert("Registration Sucessfully.");
        //cookies set
        Cookies.set("SignupName", "signup");
        // Cookies.set("Signupdisable", "true");
        Cookies.set("Signupusername", val.username);
        Cookies.set("Signuppassword", val.password);

        localStorage.setItem("sname", "");
        localStorage.setItem("sn", val.username);
        localStorage.setItem("sp", val.password);

        setVal({
          ...val,
          username: "",
          password: "",
          comfrim: "",
        });

        //close the signup page
        handleCloseDialog();
        window.location.reload(true); //referesh the page
      })
      .catch((error) => {
        alert("Registration Failed !.");
        console.error("Error writing Document: ", error);
        localStorage.setItem("sname", "SIGNUP");
      });
  };

  var textcolorvariable = props.textcolor;
  //read cookies values
  var titleNameSignUp;
  var n = localStorage.getItem("sname");
  if (n === "SIGNUP") {
    titleNameSignUp = "SIGNUP";
  } else {
    titleNameSignUp = "REGISTERED";
  }

  return (
    <div>
      <Button
        style={{ color: textcolorvariable }}
        onClick={handleClickOpenDialog}
      >
        {titleNameSignUp}
      </Button>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="form-dialog-title"
      >
        <h1
          id="form-dialog-title"
          style={{
            marginTop: "30px",
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Sign Up
        </h1>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <form
            onSubmit={preventrefresh}
            className="text-center"
            style={{
              width: "400px",
            }}
          >
            <TextField
              onChange={getusername}
              value={val.username}
              required
              type="email"
              autoFocus
              margin="dense"
              id="inputEmail"
              label="Email Address"
              fullWidth
            />
            <br />
            <InputLabel className="text-danger">{val.errors.email}</InputLabel>
            <br />
            <TextField
              onChange={getpassword}
              value={val.password}
              required
              autoFocus
              margin="dense"
              type="password"
              id="inputPassword"
              label="Password"
              fullWidth
            />
            <br />
            <InputLabel className="text-danger">
              {val.errors.password}
            </InputLabel>
            <br />
            <TextField
              onChange={getcomfrim}
              value={val.comfrim}
              required
              autoFocus
              margin="dense"
              type="password"
              id="inputPassword"
              label="Comfrim Password"
              fullWidth
            />
            <br />
            <InputLabel className="text-danger">
              {val.errors.comfrime}
            </InputLabel>
            <br />
            <Button
              onClick={regdatasubmit}
              className="btn btn-lg btn-primary btn-block text-uppercase"
              type="submit"
              style={{
                position: "relative",
                padding: "15px",
                marginTop: "50px",
                backgroundColor: "orange",
                width: "250px",
                borderRadius: "50px",
              }}
            >
              Sign Up Now
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SignUpForm;
