import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/*------------*/

import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

import Navigation from "./JsxCodeFiles/Navigation";
import reportWebVitals from "./reportWebVitals";
import ViewAnswers from "./JsxCodeFiles/ViewQuestionAndAnsers/AllAnswersView";
import AllQuestions from "./JsxCodeFiles/AllQuestionsList.js";
import AllDevelopers from "./JsxCodeFiles/AllDvelopers";
import Portfolio from "./PortfolioSiteCodes/new";
import About from "./JsxCodeFiles/About";
import Footer from "./JsxCodeFiles/Footer.js";

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    {/*<ViewAnswers />
    <AllQuestions />
    <AllDevelopers id="developers" />
    <About />
    <Footer />*/}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function   <App />
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
