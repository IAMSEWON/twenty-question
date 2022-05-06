import React, { useState } from "react";
import classes from "./Main.module.css";
import FadeIn from "../UI/FadeIn/FadeIn";

const Main = () => {
  const [main, setMain] = useState(false);
  return <FadeIn className={classes.title} title="스무고개"></FadeIn>;
};

export default Main;
