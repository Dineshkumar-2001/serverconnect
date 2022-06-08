import React, { Component } from "react";
import Belts from "./Belt.json";
import Button from '@mui/material/Button';
import Belts_details from "./Belts_details";

export default class Belt extends Component {
 
  render() {
    console.log(this.state);
    return (
     <div>
     <Belts_details/>
     </div>
    );
  }
}
