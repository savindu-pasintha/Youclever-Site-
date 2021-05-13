import emailjs from "emailjs-com";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NavigationIcon from "@material-ui/icons/Navigation";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";

import Jump from "react-reveal/Jump";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ContactUs(props) {
  const classes = useStyles();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "savindupasinthaserviceid",
        "template_8gnpm1v",
        e.target,
        "user_3pugb72pxIy5ds8BKYtUd"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("YOUR EMAIL SENT.");
        },
        (error) => {
          console.log(error.text);
          alert("CAN NOT SEND EMAIL !");
        }
      );
    e.target.reset();
  }

  return (
    <div className="ContactUs" style={{ width: "100%" }}>
      <div className="container-fluid pt-5 mx-auto w-100">
        <form onSubmit={sendEmail} className="row pt-2 mx-auto ">
          {/*left side*/}
          <div className="col-md-8 ">
            <div className="form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="To Name ex : Developer Name "
                name="user_name"
                value={props.developerName}
              />
            </div>
            <div className="form-group pt-2 mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Subject ex : For New Job"
                name="subject"
              />
            </div>
            <div className="form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="To Email ex : savindupasingtha@gmail.com"
                name="user_email"
                value={props.developerEmail}
              />
            </div>
            <div className="form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Bcc To Email ex : jonevelis@gmail.com"
                name="bind"
              />
            </div>
            <div className="form-group pt-2 mx-auto">
              <input
                type="email"
                className="form-control"
                placeholder="Cc To Email ex : supunsulakshana@gmail.com"
                name="carbon"
              />
            </div>
            <div className="form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message Type Here...  "
                name="message"
              ></textarea>
            </div>
          </div>
          {/*right side*/}
          <div className="col-md-4" style={{ textAlign: "center" }}>
            <div className="pt-3 mx-auto w-100">
              <div className={classes.root}>
                <Jump>
                  {" "}
                  <input
                    type="submit"
                    className="btn btn-info"
                    value="send"
                    style={{
                      textAlign: "center",
                      color: "white",
                      borderRadius: "50%",
                      width: "100px",
                      height: "100px",
                      background: "#ff4646",
                      border: "none",
                      fontSize: "25px",
                      position: "absolute",
                      top: "30%",
                      left: "30%",
                    }}
                  />
                </Jump>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
