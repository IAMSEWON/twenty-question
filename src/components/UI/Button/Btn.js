import React from "react";

import classes from "./Btn.module.css";
import Button from "@mui/material/Button";

const Btn = (props) => {
  return (
    <div className={classes.btn}>
      <Button color="success" onClick={props.onClick}>
        {props.text}
      </Button>
    </div>
  );
};

export default Btn;
