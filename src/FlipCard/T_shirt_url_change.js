import React, { Component } from "react";

export default class T_shirt_url_change extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      id: "",
      prize: "",
      Add_card_1: 0,
    };
  }
  render() {
    let data = JSON.parse(localStorage.getItem("T_shirt"));
    return (
      <div>
        {data.map((x) => {
          return (
            <div>
              <h2> ID : {x.id} </h2>
              <br />
              <h2> Name : {x.name} </h2>
              <br />
              <h2> Prize : {x.Prize} </h2>
            </div>
          );
        })}
      </div>
    );
  }
}
