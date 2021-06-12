import "./assets/css/styles.css";
import ScrollReveal from "scrollreveal";
import React from "react";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import FavoriteIcon from "@material-ui/icons/Favorite";

import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import Bounce from "react-reveal/Bounce";
import Flip from "react-reveal/Flip";
import Roll from "react-reveal/Roll";

import firebase from "../JsxCodeFiles/Firbase_FireStore_Database/firebase";
import { Link } from "react-router-dom";

import Cookies from "js-cookie";

import { useReactToPrint } from "react-to-print";

export default function Portfolio(props) {
  const [propid, setPropid] = React.useState({ number: "" });

  const [contact, setContact] = React.useState({
    email: "",
    name: "",
    message: "",
  });
  const getEmail = (e) => {
    setContact({ ...contact, email: e.target.value });
  };
  const getName = (e) => {
    setContact({ ...contact, name: e.target.value });
  };
  const getMessage = (e) => {
    setContact({ ...contact, message: e.target.value });
  };
  const submitContact = async (e) => {
    if (contact.email === "" && contact.name === "" && contact.message === "") {
      alert("Please Input Values !");
    } else {
      alert("Successfully !");

      var id = contact.name; //remove the last 9 charactore for @gmail.com

      const db = firebase.firestore();
      await db
        .collection("DeveloperDB")
        .doc("contact")
        .update({
          [id]: {
            email: contact.email,
            name: contact.name,
            message: contact.message,
          },
        })
        .then(() => {
          alert("Registration Sucessfully.");
          //empty
          setContact({ ...contact, email: "", name: "", message: "" });
        })
        .catch((error) => {
          alert("Registration Failed !.");
          console.error("Error writing Document: ", error);
        });
    }
  };

  const [user, setUser] = React.useState({
    aboutUsDescription: "",
    profesionalDescription: "",
    workExperience: "",
    aboutUsName: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
  });
  const [link, setLink] = React.useState({
    email: "",
    facebook: "",
    instergram: "",
    linkedin: "",
    twiter: "",
    github: "",
  });
  const [skill, setSkill] = React.useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
  });
  const [img, setImg] = React.useState({
    aboutUsImg: "",
    portfolioMainImg: "",
    profesionalSkillImg: "",
    workImg1: "",
    workImg2: "",
    workImg3: "",
    workImg4: "",
    workImg5: "",
    workImg6: "",
  });
  React.useEffect(() => {
    exe();
    //call
  });

  const fetchDataLink = async (collection, document, x) => {
    // alert(x);
    var l = x.length;
    var id = x.slice(0, l - 10);
    const db = firebase.firestore();
    var docRef = await db.collection(collection).doc(document);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          var a = doc.data(); //json array data read
          setLink({
            ...link,
            email: a.email,
            facebook: a.facebook,
            instergram: a.instergram,
            linkedin: a.linkedin,
            twiter: a.twiter,
            github: a.github,
          });
          //var d = doc.data;
          //var arr = Object.values(doc.data()); //json obj convert to array js
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
  };
  const fetchDataUser = async (collection, document, x) => {
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
          var a = b[id]; //json array data read

          setUser({
            ...user,
            aboutUsDescription: a.aboutUsDescription,
            profesionalDescription: a.profesionalDescription,
            workExperience: a.workExperience,
            aboutUsName: a.aboutUsName,
            firstName: a.firstName,
            lastName: a.lastName,
            jobTitle: a.jobTitle,
          });
          // var arr = Object.values(doc.data()); //json obj convert to array js
          // setArrayd(arr);
          console.log("user Document data:", a.lastName);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };
  const fetchDataImg = async (collection, document, x) => {
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
          var a = b[id];
          setImg({
            ...img,
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
          // var arr = Object.values(doc.data()); //json obj convert to array js
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
  };

  const fetchDataSkill = async (collection, document, x) => {
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
          var a = b[id];
          setSkill({
            ...skill,
            one: a.one,
            two: a.two,
            three: a.three,
            four: a.four,
            five: a.five,
            six: a.six,
            seven: a.seven,
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
  };

  const exe = () => {
    var xm =localStorage.getItem("sn");
    // xm=Cookies.get("Signupusername"); example@gmail.com
 
  
    if (xm !== "") {
      fetchDataUser("DeveloperDB", "user", xm);
      fetchDataImg("DeveloperDB", "Images", xm);
      fetchDataLink("DeveloperDB", "link", xm);
      fetchDataSkill("DeveloperDB", "skill", xm);
    } else {
      alert("1-Please Signup First !");
    }
 
   
   
  };
  //print pdf
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const view = () => {
    return (
      <div>
        {/*===== HEADER =====*/}
        <header className="l-header">
          <nav className="nav bd-grid">
            <div>
              <a href="#l" className="nav__logo">
                {user.firstName}
              </a>
            </div>
            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" className="nav__link active">
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    About
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#skills" className="nav__link">
                    Skills
                  </a>
                </li>
                <li className="nav__item ">
                  <a href="#work" className="nav__link">
                    Work
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#contact" className="nav__link">
                    Contact
                  </a>
                </li>
                <li className="nav__item">
                  <button
                    className="nav__link"
                    style={{
                      border: "none",
                      borderRadius: "50px",
                      background: "yellow",
                    }}
                    onClick={handlePrint}
                  >
                    GET YOUR RESUME
                  </button>
                </li>
              </ul>
            </div>
            <div className="nav__toggle" id="nav-toggle">
              <i className="bx bx-menu" />
            </div>
          </nav>
        </header>
        <main className="l-main">
          <div style={{ width: "100%", height: "auto" }} ref={componentRef}>
            {/*===== HOME =====*/}
            <section className="home bd-grid" id="home">
              <div className="home__data">
                <Fade top>
                  <h1 className="home__title" style={{ fontWeight: "900" }}>
                    Hi,
                    <br />
                    I'am{" "}
                    <span className="home__title-color">
                      {user.firstName} {user.lastName}
                    </span>
                  </h1>
                </Fade>
                <Fade top>
                  <h1
                    className="home__title-color"
                    style={{ fontWeight: "900", color: "#ff5200" }}
                  >
                    {user.jobTitle}
                  </h1>
                </Fade>
                <Rotate bottom left>
                  <a
                    href="#contact"
                    className="button"
                    style={{ margin: "100px" }}
                  >
                    Contact
                  </a>
                </Rotate>
              </div>
              <Fade top>
                <div className="home__social">
                  <a href={link.linkedin} class="home__social-icon">
                    <i class="bx bxl-linkedin"></i>
                  </a>
                  <a href={link.github} className="home__social-icon">
                    <GitHubIcon />
                  </a>
                  <a href={link.facebook} className="home__social-icon">
                    <FacebookIcon />
                  </a>
                  <a href={link.twiter} className="home__social-icon">
                    <TwitterIcon />
                  </a>
                  <a href={link.instergram} className="home__social-icon">
                    <InstagramIcon />
                  </a>
                  <a href={link.email} className="home__social-icon">
                    <EmailIcon />
                  </a>
                </div>
              </Fade>
              <Bounce right>
                <div className="home__img">
                  <img
                    src={img.portfolioMainImg}
                    alt="kk"
                    style={{
                      height: "450px",
                      width: "450px",
                      borderRadius: "50%",
                      padding: "55px",
                      position: "relative",
                    }}
                  />
                </div>
              </Bounce>
            </section>

            {/*===== ABOUT =====*/}
            <section className="about section " id="about">
              <Fade right>
                <h2 className="section-title">About</h2>
              </Fade>
              <div className="about__container bd-grid">
                <div className="about__img">
                  <Bounce left>
                    <img
                      src={img.portfolioMainImg}
                      style={{ height: "250px", width: "400px" }}
                      alt="pp"
                    />
                  </Bounce>
                </div>
                <div>
                  <Flip right>
                    <h2 className="about__subtitle">I'am {user.aboutUsName}</h2>
                  </Flip>
                  <p className="about__text">{user.aboutUsDescription}</p>
                </div>
              </div>
            </section>
            {/*===== SKILLS =====*/}
            <section className="skills section" id="skills">
              <h2 className="section-title">Skills</h2>
              <div className="skills__container bd-grid">
                <div>
                  <Fade top>
                    <h2 className="skills__subtitle">Profesional Skills</h2>
                  </Fade>
                  <Fade top>
                    <p className="skills__text">
                      {user.profesionalDescription}
                    </p>
                  </Fade>
                  <Flip bottom>
                    <div className="skills__data">
                      <div className="skills__names">
                        <FavoriteIcon
                          style={{
                            color: "orange",
                            fontSize: "50px",
                            position: "relative",
                            paddingLeft: "0px",
                          }}
                        />
                        <span className="skills__name">{skill.one}</span>
                      </div>
                      <div className="skills__bar skills__html"></div>
                      <div>
                        <span className="skills__percentage">95%</span>
                      </div>
                    </div>
                  </Flip>
                  <Flip bottom>
                    <div className="skills__data">
                      <div className="skills__names">
                        <FavoriteIcon
                          style={{
                            color: "orange",
                            fontSize: "50px",
                            position: "relative",
                            paddingLeft: "0px",
                          }}
                        />
                        <span className="skills__name">{skill.two}</span>
                      </div>
                      <div className="skills__bar skills__css"></div>
                      <div>
                        <span className="skills__percentage">85%</span>
                      </div>
                    </div>
                  </Flip>
                  <Flip bottom>
                    <div className="skills__data">
                      <div className="skills__names">
                        <FavoriteIcon
                          style={{
                            color: "orange",
                            fontSize: "50px",
                            position: "relative",
                            paddingLeft: "0px",
                          }}
                        />
                        <span className="skills__name">{skill.three}</span>
                      </div>
                      <div className="skills__bar skills__js"></div>
                      <div>
                        <span className="skills__percentage">65%</span>
                      </div>
                    </div>
                  </Flip>
                  <Flip bottom>
                    <div className="skills__data">
                      <div className="skills__names">
                        <FavoriteIcon
                          style={{
                            color: "orange",
                            fontSize: "50px",
                            position: "relative",
                            paddingLeft: "0px",
                          }}
                        />
                        <span className="skills__name">{skill.four}</span>
                      </div>
                      <div className="skills__bar skills__ux"></div>
                      <div>
                        <span className="skills__percentage">85%</span>
                      </div>
                    </div>
                  </Flip>
                  <Flip bottom>
                    <div className="skills__data">
                      <div className="skills__names">
                        <FavoriteIcon
                          style={{
                            color: "orange",
                            fontSize: "50px",
                            position: "relative",
                            paddingLeft: "0px",
                          }}
                        />
                        <span className="skills__name">{skill.five}</span>
                      </div>
                      <div className="skills__bar skills__ux"></div>
                      <div>
                        <span className="skills__percentage">85%</span>
                      </div>
                    </div>
                  </Flip>
                  <Flip bottom>
                    <div className="skills__data">
                      <div className="skills__names">
                        <FavoriteIcon
                          style={{
                            color: "orange",
                            fontSize: "50px",
                            position: "relative",
                            paddingLeft: "0px",
                          }}
                        />
                        <span className="skills__name">{skill.six}</span>
                      </div>
                      <div className="skills__bar skills__ux"></div>
                      <div>
                        <span className="skills__percentage">75%</span>
                      </div>
                    </div>
                  </Flip>
                </div>
                <Rotate top right>
                  <div>
                    <img
                      src={img.profesionalSkillImg}
                      alt="profileimge"
                      className="skills__img"
                    />
                  </div>
                </Rotate>
                <Rotate top right>
                  <div className="skills__data">
                    <div className="skills__names">
                      <FavoriteIcon
                        style={{
                          color: "orange",
                          fontSize: "50px",
                          position: "relative",
                          paddingLeft: "0px",
                        }}
                      />
                      <span className="skills__name">{skill.seven}</span>
                    </div>
                    <div className="skills__bar skills__ux"></div>
                    <div>
                      <span className="skills__percentage">85%</span>
                    </div>
                  </div>
                </Rotate>
              </div>
            </section>
            {/*===== WORK =====*/}
            <section className="work section" id="work">
              <Flip right>
                <h2 className="section-title">Work</h2>
              </Flip>
              <div className="work__container bd-grid">
                <Bounce top>
                  <div className="work__img">
                    <img
                      style={{ height: "200px" }}
                      src={img.workImg1}
                      alt="m"
                    />
                  </div>
                </Bounce>
                <Bounce top>
                  <div className="work__img">
                    <img
                      style={{ height: "200px" }}
                      src={img.workImg2}
                      alt="l"
                    />
                  </div>
                </Bounce>
                <Bounce top>
                  <div className="work__img">
                    <img
                      style={{ height: "200px" }}
                      src={img.workImg3}
                      alt="jh"
                    />
                  </div>
                </Bounce>
                <Bounce top>
                  <div className="work__img">
                    <img
                      style={{ height: "200px" }}
                      src={img.workImg4}
                      alt="u"
                    />
                  </div>
                </Bounce>
                <Bounce bottom>
                  <div className="work__img">
                    <img
                      style={{ height: "200px" }}
                      src={img.workImg5}
                      alt="hh"
                    />
                  </div>
                </Bounce>
                <Bounce bottom>
                  <div className="work__img">
                    <img
                      style={{ height: "200px" }}
                      src={img.workImg6}
                      alt="yy"
                    />
                  </div>
                </Bounce>
              </div>
            </section>
            {/*===== CONTACT =====*/}
          </div>
          <section className="contact section" id="contact">
            <Roll right>
              <h2 className="section-title">Contact</h2>
            </Roll>
            <div className="contact__container bd-grid">
              <form method="GET" action className="contact__form">
                <Flip left>
                  <input
                    onChange={getName}
                    name="name"
                    required
                    type="text"
                    placeholder="Your Name"
                    className="contact__input"
                  />
                  <input
                    onChange={getEmail}
                    name="email"
                    required
                    type="email"
                    placeholder="Email"
                    className="contact__input"
                  />
                  <textarea
                    onChange={getMessage}
                    name="message"
                    placeholder="Message....."
                    required
                    id
                    cols={0}
                    rows={10}
                    className="contact__input"
                    defaultValue={""}
                  />
                </Flip>
                <Rotate>
                  <input
                    onClick={submitContact}
                    name="submit"
                    type="submit"
                    defaultValue="Send"
                    className="contact__button button"
                  />
                </Rotate>
              </form>
            </div>
          </section>
        </main>
        {/*===== FOOTER =====*/}
        <footer className="footer">
          <Fade right big>
            <p className="footer__title">{user.firstName}</p>
            <div className="footer__social">
              <a href={link.facebook} className="footer__icon">
                <i className="bx bxl-facebook" />
              </a>
              <a href={link.instergram} className="footer__icon">
                <i className="bx bxl-instagram" />
              </a>
              <a href={link.twiter} className="footer__icon">
                <i className="bx bxl-twitter" />
              </a>
            </div>
            <p>© 2021 copyright all right reserved</p>
          </Fade>
        </footer>
        {/*===== SCROLL REVEAL =====*/}
        {/*===== MAIN JS =====*/}
      </div>
    );
  };

  const ch = () => {
    var x = 0;
    if (Cookies.get("Signupusername") === "") {
      x = view();
    } else {
      x = "";
    }

    return x;
  };

  return ch();
}
