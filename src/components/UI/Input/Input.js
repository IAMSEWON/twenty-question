import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const Input = (props) => {
  const [newAnswer, setNewAnswer] = useState("");
  const onTextChange = (e) => {
    console.log("Input !!");
  };

  return (
    <TextField
      id="standard-basic"
      label="Standard"
      variant="standard"
      onChange={onTextChange}
    />
  );
};

export default Input;
