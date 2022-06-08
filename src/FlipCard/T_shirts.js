import React, { Component } from "react";
import T_shirt from "./T_shirt.json";
 import Button from '@mui/material/Button';
import T_shirts_details from "./T_shirts_details";

export default class T_shirts extends Component {

 
  render() {
    console.log(this.state);
    return (
     <div>
      <T_shirts_details/>
     </div>
    );
  }
}
