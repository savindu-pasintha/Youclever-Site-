import Developers from "./Developers/Developers";
import LinearProgress from "@material-ui/core/LinearProgress";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function AllDevelopers() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});

  
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };

    /*
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
    */
  },[progressRef]);



  return (
    <div
      className="Developers"
      style={{
        width: "100%",
        height: "auto",
        position: "relative",
        top: "100px",
        bottom: "100px",
      }}
    >
      <div className={classes.root}>
        <LinearProgress
          variant="buffer"
          value={progress}
          valueBuffer={buffer}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "auto",
          textAlign: "center",
        }}
      >
        <h
          style={{
            width: "100%",
            fontSize: "65px",
            fontWeight: "900",
            color: "#ff6701",
            position: "relative",
            top: "100px",
            bottom: "100px",
          }}
        >
          Hire Developers
        </h>
      </div>
      <div
        className="container-fluid"
        style={{
          width: "100%",
          fontSize: "65px",
          fontWeight: "900",
          color: "#ff6701",
          position: "relative",
          top: "200px",
       paddingLeft:"10%",
       paddingRight:"10%"
      
        }}
      >
        <Developers />
      </div>
    </div>
  );
}

export default AllDevelopers;
