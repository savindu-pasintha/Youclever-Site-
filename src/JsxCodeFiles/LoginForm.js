import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


import Cookies from "js-cookie";

function LoginForm(props) {
  const [openDialog, setOpenDialog] = useState(false);
  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  /*------------------------------------- */
  //use state hook define to store variables
  //create user state
  const [val, setVal] = useState({
    username: "",
    password: "",
    result: 10,
    // used to store firbase retrive data values,
    firebasedata: [],
    checkuser: "name",
    checkpass: "pass",
    inputtagvalues: " ",
  });
  //get username
  const getusername = (e) => {
    setVal({
      ...val,
      username: e.target.value,
    });
  };
  //get password
  const getpassword = (e) => {
    setVal({
      ...val,
      password: e.target.value,
    });
  };
  //get password
  const setempty = (e) => {
    setVal({
      ...val,
      password: e.target.value,
    });
  };
  //cancel the refresh page
  const onsubmitpreventrefresh = (e) => {
    e.preventDefault();
  };

  const loginbtn = () => {
    var name = Cookies.get("Signupusername");
    var pass = Cookies.get("Signuppassword");
    if (name === val.username && pass === val.password) {
      alert("Successfull Login.");
      Cookies.set("LoginName", "LOGGED");
      handleCloseDialog();
    } else {
      alert("Login Failed !");
    }
  };

  var textcolorvariable = props.textcolor;
  var loginName = Cookies.get("LoginName");

  return (
    <div>
      <Button
        style={{ color: textcolorvariable }}
        onClick={handleClickOpenDialog}
      >
        {loginName}
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
          Sign In
        </h1>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <form
            onSubmit={onsubmitpreventrefresh}
            className="text-center"
            style={{
              width: "400px",
            }}
          >
            <TextField
              onChange={getusername}
              required
              type="email"
              autoFocus
              margin="dense"
              id="inputEmail"
              label="Email Address"
              fullWidth
            />

            <TextField
              onChange={getpassword}
              required
              autoFocus
              margin="dense"
              type="password"
              id="inputPassword"
              label="Password"
              fullWidth
            />

            <Button
              onClick={loginbtn}
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
              Sign In Now
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

export default LoginForm;
