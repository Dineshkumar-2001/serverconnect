import React, { Component } from "react";

export default class Belt_url extends Component {
  render() {

    let data1 = JSON.parse(localStorage.getItem("Belt"));
    
    console.log(data1)
    return (
        <div>
          
          {
          data1.map((x)=>{
              return(
                  <div>
                <h2> ID : {x.id} </h2> <br/>
                <h2> NAME : {x.name} </h2> <br/>
                <h2> PRIZE : {x.Prize} </h2> 
                  </div>
              )
           
          })}
        </div>
      );
  }
}
