import { Button } from "@mui/material";
import React, { Component } from "react";
import Jeen from "./Jeen.json";
import Jean_detail from "./Jean_detail";

export default class Jeens extends Component {
 

  render() {
    console.log(this.state);
    return (
       <div>
          
          <Jean_detail/>
       </div>
    );
  }
}
