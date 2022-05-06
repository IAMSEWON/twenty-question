import React, { useState } from "react";
import ReactFadeIn from "react-fade-in";

const FadeIn = (props) => {
  return <ReactFadeIn className={props.className}>{props.title}</ReactFadeIn>;
};

export default FadeIn;
