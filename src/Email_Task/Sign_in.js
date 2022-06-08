import React, { Component } from "react";
import "./Email.css";
// import Email_01 from "./Email_01_check";
// import Email_01_check from "./Email_01_check";
import { Link, NavLink } from "react-router-dom";
// import * as React from 'react';
import Button from '@mui/material/Button';

export default class Emailset__local extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      age: "",
      email: "",
      password: "",
    };
  }

  onChangename = (event) => {
    this.setState({ name: event.target.value });
    console.log("Name =>", event.target.value);
  };

  onChangeage = (event) => {
    this.setState({ age: event.target.value });
    console.log("age =>", event.target.value);
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangepassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
  };

  onClick = () => {
    var parent = JSON.parse(localStorage.getItem("Email")) || [];

    var child = parent.map((x) => x.email);

    const { email } = this.state;

    const regular_EX =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!this.state.email || regular_EX.test(this.state.email) === false) {
      alert("Check your email");
      // this.setState({ nav: <NavLink to="/Emailset__local"></NavLink> });
    } else if (child.includes(email)) {
      alert("Already Registered");
    } else {
      parent.push({
        email: this.state.email,
        password: this.state.password,
      });
      // this.setState({ nav: <NavLink to="/Email_01"></NavLink> });
    }

    localStorage.setItem("Email", JSON.stringify(parent));
    // localStorage.setItem("Password",);
    // console.log(parent);
  };

  render() {
    return (
      <div className="App">
        <h1>SIGN IN PAGE</h1>

        <form onSubmit={this.onFormSubmit}>
          <div>
            <label>
              <h1>
                Name : <input type="text" onChange={this.onChangename} />
              </h1>
            </label>
          </div>

          <div>
            <label>
              <h1>
                Age : <input type="number" onChange={this.onChangeage} />
              </h1>
            </label>
          </div>

          <div>
            <label>
              <h1>
                Email : <input type="email" onChange={this.onChangeEmail} />
              </h1>
            </label>
          </div>

          <div>
            <label>
              <h1>
                Password :
                <input type="text" onChange={this.onChangepassword} />
              </h1>
            </label>
          </div>

          <div>
            <nav>
              <div>
                <Button type="submit" onClick={this.onClick} variant="contained">
                  <Link to="/Email_01_check">REGISTER</Link>
                </Button>
              </div>
              <div>OR</div>

              <div>
                <Button variant="outlined">
                  <Link to="/Email_01_check">LOG-IN</Link>
                </Button>
              </div>
            </nav>
          </div>
        </form>
      </div>
    );
  }
}
