import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import Bounce from "react-reveal/Bounce";
import Roll from "react-reveal/Roll";
import firebase from "./Firbase_FireStore_Database/firebase";

import Cookies from "js-cookie";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "90%",
    },
  },
}));
/*--------------- */
const useStylesFloatActionBtn = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
/*-------------------------- */
const useStylesSelect = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function QuestionsAdd() {



  const classes = useStyles();
  const classesFloatActionBtn = useStylesFloatActionBtn();
  /*----------- */
  const [valueQ, setValueQ] = React.useState(""); //question
  const classesSelect = useStylesSelect();
  const [age, setAge] = React.useState(""); //language
  const [technology, setTechnology] = React.useState(""); //technology
  const [content, setContent] = React.useState(""); //content
  const [filename, setFilename] = React.useState(""); //filename

  const handleChangeSelectALanguage = (event) => {
    setAge(event.target.value);
    console.log(age);
  };
  const handleChangeSelecttechnology = (event) => {
    setTechnology(event.target.value);
    console.log(technology);
  };

  const handleChangeQuestion = (event) => {
    setValueQ(event.target.value);
    console.log(valueQ);
  };
  const getfilename = (event) => {
    setFilename(event.target.value);
    console.log(filename);
  };
  const getcontent = (event) => {
    setContent(event.target.value);
    console.log(content);
  };

  /*-------------------------------------*/
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    //call add button to database
    if (valueQ !== "" || technology !== "" || age !== "" || content !== "") {
      addbtn();
    } else {
      alert("Please Input Question !.");
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  /*--------------add to databse firestore----------codes ----------------------*/
  const addbtn = () => {
    var x = localStorage.getItem("sn");  //Cookies.get("Signupusername");
    var l = x.length;
    var user = x.slice(0, l - 10);
   
    if (x !== "") {
      // alert(x);
      const db = firebase.firestore();
      var x = 0; // this variable passs to [x] inside
      x = Math.round(Math.random() * 100000);
      //db.collection("name").add(); this method can not add document to collection

      db.collection("DeveloperDB")
        .doc("Question")
        .update({
          [x]: {
            id: x,
            question: valueQ,
            language: age,
            technology: technology,
            filename: filename,
            content: content,
            userId: user,
          },
        })
        .then(() => {
          // alert("Document successfully Written.");
          setOpen(true); //open dialog
          //empty values in text feilds
          setTechnology("");
          setContent("");
          setFilename("");
          setValueQ("");
          setAge("");
          window.location.reload(true); //referesh the page
      
        } 
        )
        .catch((error) => {
          console.error("Error writing Document: ", error);
        });
    } else {
      alert("Please SignUp First !");
    }
  };

  return (
    <div className="QuestionsAndAnswers" style={{ width: "100%" }}>
      <div className="text-center pt-3">
        <Bounce left>
          <h style={{ color: "#ff8303", fontSize: "45px", fontWeight: "bold" }}>
            ADD YOUR QUESTION
          </h>
        </Bounce>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-multiline-flexible1"
            label="Question"
            multiline
            rowsMax={15}
            value={valueQ}
            onChange={handleChangeQuestion}
          />
            <TextField
            id="Languages"
            label="Languages"
            onChange={handleChangeSelectALanguage}
          
          />
            <TextField
            id="Technology"
            label="Technology"
            onChange={handleChangeSelecttechnology}
          
          />
         {/* <FormControl className={classesSelect.formControl}>
            <InputLabel id="demo-simple-select-label">Languages</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChangeSelectALanguage}
            >
              <MenuItem value={"java"}>Java</MenuItem>
              <MenuItem value={"php"}>PHP</MenuItem>
              <MenuItem value={"javascript"}>JavaScript</MenuItem>
            
            </Select>
          </FormControl>
          <FormControl className={classesSelect.formControl}>
            <InputLabel id="demo-simple-select-label">Technology</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={technology}
              onChange={handleChangeSelecttechnology}
            >
              <MenuItem value={"React"}>React</MenuItem>
              <MenuItem value={"Vuejs"}>Vuejs</MenuItem>
              <MenuItem value={"Angular"}>Angular</MenuItem>
              <MenuItem value={"Nodejs"}>Nodejs</MenuItem>
              <MenuItem value={"Express"}>Express</MenuItem>
              <MenuItem value={"Nextjs"}>Nextjs</MenuItem>
              <MenuItem value={"Xamarine"}>Xamarine</MenuItem>
              <MenuItem value={"Fluter"}>Fluter</MenuItem>
              <MenuItem value={"Reat Native"}>Reat Native</MenuItem>
            </Select>
          </FormControl>*/}
          <TextField
            onChange={getfilename}
            id="standard-basic"
            label="File name  abc.html"
            value={filename}
          />
          <TextField
            id="standard-multiline-flexible"
            label="Your Resources files contents copy or write here.."
            multiline
            rowsMax={15}
            value={content}
            onChange={getcontent}
          />
          <Roll right>
            <div className={classesFloatActionBtn.root}>
              <Fab color="secondary" aria-label="add">
                <AddIcon onClick={handleClick} />
              </Fab>
            </div>
          </Roll>
        </form>
      </div>

      <div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Successfully Added !"
          action={
            <React.Fragment>
              <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
    </div>
  );
}

export default QuestionsAdd;
