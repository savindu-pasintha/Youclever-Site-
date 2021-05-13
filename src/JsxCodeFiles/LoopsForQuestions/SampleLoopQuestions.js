import React from "react";
import Button from "@material-ui/core/Button";

export default function SampleLoopQuestions(props) {
  return (
    <li
      style={{
        width: "100%",
        height: "auto",
        position: "relative",
        top: "20px",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          width: "700px",
          height: "auto",
          position: "relative",
          left: "30%",
          padding: "10px",
        }}
      >
        <Button
          variant="contained"
          style={{
            width: "70px",
            height: "50px",
            color: "white",
            borderRadius: "50px",
            background: "green",
            textAlign: "center",
          }}
        >
          {props.id}
        </Button>
        <p
          style={{
            width: "100%",
            height: "auto",
            position: "relative",
            fontSize: "25px",
            left: "50px",
          }}
        >
          {props.question}
        </p>
      </div>
    </li>
  );
}
