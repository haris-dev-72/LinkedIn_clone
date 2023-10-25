import React from "react";
import "./Inputoptions.css";
import { Icon } from "@mui/material";

function Inputoptions({Icon, title, color}) {
  return <div className="inputOptions">

<Icon style={{color:color}}/>
<h4>{title}</h4>

  </div>;
}

export default Inputoptions;
