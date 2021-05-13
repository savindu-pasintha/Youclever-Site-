import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

import SaveBtn from "./CircularIntegrationLoadingBtn";
import firebase from "../Firbase_FireStore_Database/firebase";
import Button from "@material-ui/core/Button";
import Cookies from "js-cookie";

export default function InputImages() {
  const [val, setVal] = useState({
    //files data store variables
    portfolioMainImg: "",
    aboutUsImg: "",
    profesionalSkillImg: "",
    workImg1: "",
    workImg2: "",
    workImg3: "",
    workImg4: "",
    workImg5: "",
    workImg6: "",

    sampleImg: "",
    //method three image variable
    emptyImg:
      "https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png",
  });

  const getI1 = (e) => {
    const reader = new FileReader(); //using file reader
    reader.onload = () => {
      // if after loading
      if (reader.readyState === 2) {
        setVal({
          ...val, //assign file data values to the variable useState
          //  profolioMainImg: reader.result,
          portfolioMainImg: reader.result,
        });
        //    console.log(reader.result); // console log as a base64 String converting of binary data
      }
    };
    // Read in the image file as a data URL. ok onemath nh
    reader.readAsDataURL(e.target.files[0]);
  };
  const getI2 = (e) => {
    const reader = new FileReader(); //using file reader
    reader.onload = () => {
      // if after loading
      if (reader.readyState === 2) {
        setVal({
          ...val, //assign file data values to the variable useState
          //  profolioMainImg: reader.result,
          aboutUsImg: reader.result,
        });
        //  console.log(reader.result); // console log as a base64 String converting of binary data
      }
    };
    // Read in the image file as a data URL. ok onemath nh
    reader.readAsDataURL(e.target.files[0]);
  };
  const getI3 = (e) => {
    const reader = new FileReader(); //using file reader
    reader.onload = () => {
      // if after loading
      if (reader.readyState === 2) {
        setVal({
          ...val, //assign file data values to the variable useState
          //  profolioMainImg: reader.result,
          profesionalSkillImg: reader.result,
        });
        //  console.log(reader.result); // console log as a base64 String converting of binary data
      }
    };
    // Read in the image file as a data URL. ok onemath nh
    reader.readAsDataURL(e.target.files[0]);
  };
  const getI4 = (e) => {
    const reader = new FileReader(); //using file reader
    reader.onload = () => {
      // if after loading
      if (reader.readyState === 2) {
        setVal({
          ...val, //assign file data values to the variable useState
          //  profolioMainImg: reader.result,
          workImg1: reader.result,
        });
        //  console.log(reader.result); // console log as a base64 String converting of binary data
      }
    };
    // Read in the image file as a data URL. ok onemath nh
    reader.readAsDataURL(e.target.files[0]);
  };
  const getI5 = (e) => {
    const reader = new FileReader(); //using file reader
    reader.onload = () => {
      // if after loading
      if (reader.readyState === 2) {
        setVal({
          ...val, //assign file data values to the variable useState
          //  profolioMainImg: reader.result,
          workImg2: reader.result,
        });
        //   console.log(reader.result); // console log as a base64 String converting of binary data
      }
    };
    // Read in the image file as a data URL. ok onemath nh
    reader.readAsDataURL(e.target.files[0]);
  };
  const getI6 = (e) => {
    const reader = new FileReader(); //using file reader
    reader.onload = () => {
      // if after loading
      if (reader.readyState === 2) {
        setVal({
          ...val, //assign file data values to the variable useState
          //  profolioMainImg: reader.result,
          workImg3: reader.result,
        });
        console.log(val.workImg3); // console log as a base64 String converting of binary data
      }
    };
    // Read in the image file as a data URL. ok onemath nh
    reader.readAsDataURL(e.target.files[0]);
  };
  const getI7 = (e) => {
    const reader = new FileReader(); //using file reader
    reader.onload = () => {
      // if after loading
      if (reader.readyState === 2) {
        setVal({
          ...val, //assign file data values to the variable useState
          //  profolioMainImg: reader.result,
          workImg4: reader.result,
        });
        //  console.log(reader.result); // console log as a base64 String converting of binary data
      }
    };
    // Read in the image file as a data URL. ok onemath nh
    reader.readAsDataURL(e.target.files[0]);
  };
  const getI8 = (e) => {
    const reader = new FileReader(); //using file reader
    reader.onload = () => {
      // if after loading
      if (reader.readyState === 2) {
        setVal({
          ...val, //assign file data values to the variable useState
          //  profolioMainImg: reader.result,
          workImg5: reader.result,
        });
        //  console.log(reader.result); // console log as a base64 String converting of binary data
      }
    };
    // Read in the image file as a data URL. ok onemath nh
    reader.readAsDataURL(e.target.files[0]);
  };
  const getI9 = (e) => {
    const reader = new FileReader(); //using file reader
    reader.onload = () => {
      // if after loading
      if (reader.readyState === 2) {
        setVal({
          ...val, //assign file data values to the variable useState
          //  profolioMainImg: reader.result,
          workImg6: reader.result,
        });
        //  console.log(reader.result); // console log as a base64 String converting of binary data
      }
    };
    // Read in the image file as a data URL. ok onemath nh
    reader.readAsDataURL(e.target.files[0]);
  };
  const onsubmitpreventrefresh = (e) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    fetchImages("DeveloperDB", "Images");
  }, []);

  //read firestore
  const fetchImages = (collection, document) => {
    try {
      var x = Cookies.get("Signupusername");
      if (x !== "") {
        // alert(x);
        var l = x.length;
        var id = x.slice(0, l - 10);
        const db = firebase.firestore();
        var docRef = db.collection(collection).doc(document);
        docRef
          .get()
          .then((doc) => {
            if (doc.exists) {
              var b = doc.data(); //json array data read
              var a = b[id];
              setVal({
                ...val,
                aboutUsImg: a.aboutUsImg,
                portfolioMainImg: a.portfolioMainImg,
                profesionalSkillImg: a.profesionalSkillImg,
                workImg1: a.workImg1,
                workImg2: a.workImg2,
                workImg3: a.workImg3,
                workImg4: a.workImg4,
                workImg5: a.workImg5,
                workImg6: a.workImg6,
              });
              //  var arr = Object.values(doc.data()); //json obj convert to array js
              // setArrayd(arr);
              console.log("Document data:", a);
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      } else {
        alert("Please SignUp First !");
      }
    } catch (e) {
      throw e;
    }
  };

  const saveBtn1 = async () => {
    /*  alert("Document successfully Written.");
     */
    var x = Cookies.get("Signupusername");
    if (x !== "") {
      //  alert(x);
      var l = x.length;
      var id = x.slice(0, l - 10);

      const db = firebase.firestore();
      //db.collection("name").add(); this method can not add document to collection
      await db
        .collection("DeveloperDB")
        .doc("Images")
        .update({
          [id]: {
            portfolioMainImg: val.portfolioMainImg,
            aboutUsImg: val.aboutUsImg,
            profesionalSkillImg: val.profesionalSkillImg,
            workImg1: val.workImg1,
            workImg2: val.workImg2,
            workImg3: val.workImg3,
            workImg4: val.workImg4,
            workImg5: val.workImg5,
            workImg6: val.workImg6,
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
  const saveBtn2 = async () => {
    var x = Cookies.get("Signupusername");
    if (x !== "") {
      //  alert(x);

      var l = x.length;
      var id = x.slice(0, l - 10);
      const db = firebase.firestore();
      //db.collection("name").add(); this method can not add document to collection
      await db
        .collection("DeveloperDB")
        .doc("Images")
        .update({
          [id]: {
            portfolioMainImg: val.portfolioMainImg,
            aboutUsImg: val.aboutUsImg,
            profesionalSkillImg: val.profesionalSkillImg,
            workImg1: val.workImg1,
            workImg2: val.workImg2,
            workImg3: val.workImg3,
            workImg4: val.workImg4,
            workImg5: val.workImg5,
            workImg6: val.workImg6,
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
  const saveBtn3 = async () => {
    var x = Cookies.get("Signupusername");
    if (x !== "") {
      //  alert(x);
      var l = x.length;
      var id = x.slice(0, l - 10);
      const db = firebase.firestore();
      //db.collection("name").add(); this method can not add document to collection
      await db
        .collection("DeveloperDB")
        .doc("Images")
        .update({
          [id]: {
            portfolioMainImg: val.portfolioMainImg,
            aboutUsImg: val.aboutUsImg,
            profesionalSkillImg: val.profesionalSkillImg,
            workImg1: val.workImg1,
            workImg2: val.workImg2,
            workImg3: val.workImg3,
            workImg4: val.workImg4,
            workImg5: val.workImg5,
            workImg6: val.workImg6,
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
  const saveBtn4 = async () => {
    var x = Cookies.get("Signupusername");
    if (x !== "") {
      //  alert(x);
      var l = x.length;
      var id = x.slice(0, l - 10);
      const db = firebase.firestore();
      //db.collection("name").add(); this method can not add document to collection
      await db
        .collection("DeveloperDB")
        .doc("Images")
        .update({
          [id]: {
            portfolioMainImg: val.portfolioMainImg,
            aboutUsImg: val.aboutUsImg,
            profesionalSkillImg: val.profesionalSkillImg,
            workImg1: val.workImg1,
            workImg2: val.workImg2,
            workImg3: val.workImg3,
            workImg4: val.workImg4,
            workImg5: val.workImg5,
            workImg6: val.workImg6,
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
  const saveBtn5 = async () => {
    var x = Cookies.get("Signupusername");
    if (x !== "") {
      //  alert(x);
      var l = x.length;
      var id = x.slice(0, l - 10);
      const db = firebase.firestore();
      //db.collection("name").add(); this method can not add document to collection
      await db
        .collection("DeveloperDB")
        .doc("Images")
        .update({
          [id]: {
            portfolioMainImg: val.portfolioMainImg,
            aboutUsImg: val.aboutUsImg,
            profesionalSkillImg: val.profesionalSkillImg,
            workImg1: val.workImg1,
            workImg2: val.workImg2,
            workImg3: val.workImg3,
            workImg4: val.workImg4,
            workImg5: val.workImg5,
            workImg6: val.workImg6,
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
  const saveBtn6 = async () => {
    var x = Cookies.get("Signupusername");
    if (x !== "") {
      //  alert(x);
      var l = x.length;
      var id = x.slice(0, l - 10);
      const db = firebase.firestore();
      //db.collection("name").add(); this method can not add document to collection
      await db
        .collection("DeveloperDB")
        .doc("Images")
        .update({
          [id]: {
            portfolioMainImg: val.portfolioMainImg,
            aboutUsImg: val.aboutUsImg,
            profesionalSkillImg: val.profesionalSkillImg,
            workImg1: val.workImg1,
            workImg2: val.workImg2,
            workImg3: val.workImg3,
            workImg4: val.workImg4,
            workImg5: val.workImg5,
            workImg6: val.workImg6,
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
  const saveBtn7 = async () => {
    var x = Cookies.get("Signupusername");
    if (x !== "") {
      //  alert(x);
      var l = x.length;
      var id = x.slice(0, l - 10);
      const db = firebase.firestore();
      //db.collection("name").add(); this method can not add document to collection
      await db
        .collection("DeveloperDB")
        .doc("Images")
        .update({
          [id]: {
            portfolioMainImg: val.portfolioMainImg,
            aboutUsImg: val.aboutUsImg,
            profesionalSkillImg: val.profesionalSkillImg,
            workImg1: val.workImg1,
            workImg2: val.workImg2,
            workImg3: val.workImg3,
            workImg4: val.workImg4,
            workImg5: val.workImg5,
            workImg6: val.workImg6,
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
  const saveBtn8 = async () => {
    var x = Cookies.get("Signupusername");
    if (x !== "") {
      //  alert(x);
      var l = x.length;
      var id = x.slice(0, l - 10);
      const db = firebase.firestore();
      //db.collection("name").add(); this method can not add document to collection
      await db
        .collection("DeveloperDB")
        .doc("Images")
        .update({
          [id]: {
            portfolioMainImg: val.portfolioMainImg,
            aboutUsImg: val.aboutUsImg,
            profesionalSkillImg: val.profesionalSkillImg,
            workImg1: val.workImg1,
            workImg2: val.workImg2,
            workImg3: val.workImg3,
            workImg4: val.workImg4,
            workImg5: val.workImg5,
            workImg6: val.workImg6,
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
  const saveBtn9 = async () => {
    var x = Cookies.get("Signupusername");
    if (x !== "") {
      //  alert(x);
      var l = x.length;
      var id = x.slice(0, l - 10);
      const db = firebase.firestore();
      //db.collection("name").add(); this method can not add document to collection
      await db
        .collection("DeveloperDB")
        .doc("Images")
        .update({
          [id]: {
            portfolioMainImg: val.portfolioMainImg,
            aboutUsImg: val.aboutUsImg,
            profesionalSkillImg: val.profesionalSkillImg,
            workImg1: val.workImg1,
            workImg2: val.workImg2,
            workImg3: val.workImg3,
            workImg4: val.workImg4,
            workImg5: val.workImg5,
            workImg6: val.workImg6,
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
  return (
    <form
      onSubmit={onsubmitpreventrefresh}
      style={{
        position: "absolute",
        width: "83%",
        height: "auto",
        background: "white",
      }}
    >
      <h2
        className="d-block"
        style={{
          width: "100%",
          height: "auto",
          color: "red",
          textAlign: "center",
        }}
      >
        Image file size should be bellow the 500kb !
      </h2>
      <div
        style={{
          width: "100%",
        }}
      >
        <h2
          className="d-block"
          style={{
            width: "100%",
            height: "auto",
            color: "orange",
          }}
        >
          Portfolio Image
        </h2>
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "inline-flex",
          }}
        >
          <div style={{ width: "30%", height: "auto" }}>
            <TextField
              onChange={getI1}
              accept="image/*"
              required
              type="file"
              autoFocus
              margin="dense"
              id="inputEmail"
              label=""
              fullWidth
            />
          </div>
          <div style={{ width: "40%", height: "auto" }}>
            <img
              src={val.portfolioMainImg}
              alt=""
              id="img"
              className=""
              style={{ width: "300px", height: "300px", padding: "0px" }}
            />
          </div>
          <div style={{ width: "30%", height: "auto" }}>
            <Button onClick={saveBtn1}>
              <SaveBtn />
            </Button>
          </div>
        </div>
        {/**--- */}
        <h2
          className="d-block"
          style={{
            width: "100%",
            height: "auto",
            color: "orange",
          }}
        >
          About Us Image
        </h2>
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "inline-flex",
          }}
        >
          <div style={{ width: "30%", height: "auto" }}>
            <TextField
              onChange={getI2}
              accept="image/*"
              required
              type="file"
              autoFocus
              margin="dense"
              id="inputEmail"
              label=""
              fullWidth
            />
          </div>
          <div style={{ width: "40%", height: "auto" }}>
            <img
              src={val.aboutUsImg}
              alt=""
              id="img"
              className=""
              style={{ width: "300px", height: "300px", padding: "0px" }}
            />
          </div>
          <div style={{ width: "30%", height: "auto" }}>
            <Button onClick={saveBtn2}>
              <SaveBtn />
            </Button>
          </div>
        </div>
        {/*----------- */}
        <h2
          className="d-block"
          style={{
            width: "100%",
            height: "auto",
            color: "orange",
          }}
        >
          Profesional Skill Image
        </h2>
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "inline-flex",
          }}
        >
          <div style={{ width: "30%", height: "auto" }}>
            <TextField
              onChange={getI3}
              accept="image/*"
              required
              type="file"
              autoFocus
              margin="dense"
              id="inputEmail"
              label=""
              fullWidth
            />
          </div>
          <div style={{ width: "40%", height: "auto" }}>
            <img
              src={val.profesionalSkillImg}
              alt=""
              id="img"
              className=""
              style={{ width: "300px", height: "300px", padding: "0px" }}
            />
          </div>
          <div style={{ width: "30%", height: "auto" }}>
            <Button onClick={saveBtn3}>
              <SaveBtn />
            </Button>
          </div>
        </div>
        {/*ooocccccccccccc*/}{" "}
        <h2
          className="d-block"
          style={{
            width: "100%",
            height: "auto",
            color: "orange",
          }}
        >
          Work Image 1
        </h2>
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "inline-flex",
          }}
        >
          <div style={{ width: "30%", height: "auto" }}>
            <TextField
              onChange={getI4}
              accept="image/*"
              required
              type="file"
              autoFocus
              margin="dense"
              id="inputEmail"
              label=""
              fullWidth
            />
          </div>
          <div style={{ width: "40%", height: "auto" }}>
            <img
              src={val.workImg1}
              alt=""
              id="img"
              className=""
              style={{ width: "300px", height: "300px", padding: "0px" }}
            />
          </div>
          <div style={{ width: "30%", height: "auto" }}>
            <Button onClick={saveBtn4}>
              <SaveBtn />
            </Button>
          </div>
        </div>
        {/*ooocccccccccccc*/}{" "}
        <h2
          className="d-block"
          style={{
            width: "100%",
            height: "auto",
            color: "orange",
          }}
        >
          Work Image 2
        </h2>
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "inline-flex",
          }}
        >
          <div style={{ width: "30%", height: "auto" }}>
            <TextField
              onChange={getI5}
              accept="image/*"
              required
              type="file"
              autoFocus
              margin="dense"
              id="inputEmail"
              label=""
              fullWidth
            />
          </div>
          <div style={{ width: "40%", height: "auto" }}>
            <img
              src={val.workImg2}
              alt=""
              id="img"
              className=""
              style={{ width: "300px", height: "300px", padding: "0px" }}
            />
          </div>
          <div style={{ width: "30%", height: "auto" }}>
            <Button onClick={saveBtn5}>
              <SaveBtn />
            </Button>
          </div>
        </div>
        {/*ooocccccccccccc*/}{" "}
        <h2
          className="d-block"
          style={{
            width: "100%",
            height: "auto",
            color: "orange",
          }}
        >
          Work Image 3
        </h2>
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "inline-flex",
          }}
        >
          <div style={{ width: "30%", height: "auto" }}>
            <TextField
              onChange={getI6}
              accept="image/*"
              required
              type="file"
              autoFocus
              margin="dense"
              id="inputEmail"
              label=""
              fullWidth
            />
          </div>
          <div style={{ width: "40%", height: "auto" }}>
            <img
              src={val.workImg3}
              alt=""
              id="img"
              className=""
              style={{ width: "300px", height: "300px", padding: "0px" }}
            />
          </div>
          <div style={{ width: "30%", height: "auto" }}>
            <Button onClick={saveBtn6}>
              <SaveBtn />
            </Button>
          </div>
        </div>{" "}
        {/*ooocccccccccccc*/}{" "}
        <h2
          className="d-block"
          style={{
            width: "100%",
            height: "auto",
            color: "orange",
          }}
        >
          Work Image 4
        </h2>
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "inline-flex",
          }}
        >
          <div style={{ width: "30%", height: "auto" }}>
            <TextField
              onChange={getI7}
              accept="image/*"
              required
              type="file"
              autoFocus
              margin="dense"
              id="inputEmail"
              label=""
              fullWidth
            />
          </div>
          <div style={{ width: "40%", height: "auto" }}>
            <img
              src={val.workImg4}
              alt=""
              id="img"
              className=""
              style={{ width: "300px", height: "300px", padding: "0px" }}
            />
          </div>
          <div style={{ width: "30%", height: "auto" }}>
            <Button onClick={saveBtn7}>
              <SaveBtn />
            </Button>
          </div>
        </div>{" "}
        {/*ooocccccccccccc*/}{" "}
        <h2
          className="d-block"
          style={{
            width: "100%",
            height: "auto",
            color: "orange",
          }}
        >
          Work Image 5
        </h2>
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "inline-flex",
          }}
        >
          <div style={{ width: "30%", height: "auto" }}>
            <TextField
              onChange={getI8}
              accept="image/*"
              required
              type="file"
              autoFocus
              margin="dense"
              id="inputEmail"
              label=""
              fullWidth
            />
          </div>
          <div style={{ width: "40%", height: "auto" }}>
            <img
              src={val.workImg5}
              alt=""
              id="img"
              className=""
              style={{ width: "300px", height: "300px", padding: "0px" }}
            />
          </div>
          <div style={{ width: "30%", height: "auto" }}>
            <Button onClick={saveBtn8}>
              <SaveBtn />
            </Button>
          </div>
        </div>{" "}
        {/*ooocccccccccccc*/}{" "}
        <h2
          className="d-block"
          style={{
            width: "100%",
            height: "auto",
            color: "orange",
          }}
        >
          Work Image 6
        </h2>
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "inline-flex",
          }}
        >
          <div style={{ width: "30%", height: "auto" }}>
            <TextField
              onChange={getI9}
              accept="image/*"
              required
              type="file"
              autoFocus
              margin="dense"
              id="inputEmail"
              label=""
              fullWidth
            />
          </div>
          <div style={{ width: "40%", height: "auto" }}>
            <img
              src={val.workImg6}
              alt=""
              id="img"
              className=""
              style={{ width: "300px", height: "300px", padding: "0px" }}
            />
          </div>
          <div style={{ width: "30%", height: "auto" }}>
            <Button onClick={saveBtn9}>
              <SaveBtn />
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
