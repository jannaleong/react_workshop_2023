import classes from "./Home.module.css";
import React, { useState } from "react";

export default function Home() {
  const urls = ["janna.jpg", "jaeho.jpg", "ruiheng.jpg"];
  const [personState, setPersonState] = useState(0);
  // useState(arg) returns an array with 2 items to match the two variables "personState" and "setpersonState"
  // sets the first item, "personState", as 0, and the second item is React's default function (implementation not needed to be known)

  const captions = [
    "Janna, and I have high DHL cholesterol.",
    "Jaeho, and I'm scared of cats and dogs.",
    "Ruiheng, and I enjoy groundhogs."
  ];

  return (
    <div className={classes.app}>
      <div className={classes.introtext}>
        <h1>Hi there! My name is</h1>
        <h1>{captions[personState]}</h1>
      </div>
      <div className={classes.photo}>
        <img
          src={urls[personState]}
          onClick={() =>
            setPersonState(personState === 2 ? 0 : personState + 1)
          }
          alt="capybara."
        ></img>
      </div>
    </div>
  );
}
