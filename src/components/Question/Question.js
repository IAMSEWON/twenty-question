import { Input } from "@mui/material";
import React, { useState, useEffect } from "react";

const hills = [
  { step: 1, question: "나의 MBTI는 ?", answer: "" },
  { step: 2, question: "나의 생일은 ?", answer: "" },
];

const Question = (props) => {
  const [answer, setAnswer] = useState("");
  const hillsQuestion = hills
    .filter((hill) => hill.step === props.step)
    .map((hill) => <h1 key={hill.step}>{hill.question}</h1>);

  const inputHandler = (event) => {
    console.log(props.step);
    console.log(event.target.value);
    // setAnswer(event.target.value);
  };

  return (
    <>
      {hillsQuestion}
      <Input value={answer} onInput={inputHandler} />
    </>
  );
};

export default Question;
