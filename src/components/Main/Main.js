import React, { useEffect, useState, useContext } from "react";

import classes from "./Main.module.css";
import FadeIn from "../UI/FadeIn/FadeIn";
import Btn from "../UI/Button/Btn";
import Question from "../Question/Question";
import AppContext from "../../store/appContext";

const Main = () => {
  const ctx = useContext(AppContext);
  return (
    <>
      {ctx.currentStep < 1 ? (
        <FadeIn className={classes.title} title="스무고개"></FadeIn>
      ) : (
        <Question step={ctx.currentStep}></Question>
      )}
      <Btn
        text={ctx.currentStep < 1 ? "시작" : "다음"}
        onClick={ctx.increaseCurrentStep}
      />
    </>
  );
};

export default Main;
