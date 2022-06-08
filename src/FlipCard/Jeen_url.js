import React, { Component } from "react";
import Jeen from "./Jeen.json";
export default class Jeen_url extends Component {
  render() {
    
let data = JSON.parse(localStorage.getItem("Jean1"))
    return (
      <div>
        
        {data.map((x)=>{
            return(
                <div>
              <h2> ID : {x.id} </h2> <br/>
              <h2> NAME : {x.name} </h2> <br/>
              <h2> PRIZE : {x.Prize} </h2> <br/>
              <img  src={x.link}/>
                </div>
            )
         
        })}
      </div>
    );
  }
}
