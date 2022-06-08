import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./Email.css";

// import './App.css';

class Regis_x extends React.Component {
  constructor() {
    super();
    this.state = {
      email_1: "",
      password_1: "",
      nav: "",
     
    };
  }

  onChange1 = (event) => {
    this.setState({
      email_1: event.target.value,
    });
    console.log("Get email ID =>", event.target.value);
  };

  onChange2 = (m) => {
    this.setState({
      password_1: m.target.value,
    });
  };

  onSubmit = () => {
    const { email_1, password_1 } = this.state;

    const getEmail_ID = JSON.parse(localStorage.getItem("Email"));

    let res = getEmail_ID.some((m) => {
      return m.email === email_1 && m.password === password_1;
    });

    console.log(res);

   
    if ( res === true) {
      // <Navigate to="/welcome"></Navigate>
        <Link to="/Welcome"></Link>
        alert("Email and password matched");
      
        
    } else  {
        alert("Email not match")
        // this.setState({nav:<Navigate to="/Router_test"></Navigate>})
    }
  };

  render() {
    return (
      <div className="App">
        
        <div>
          <h1>Login Page</h1>
          <h2>
            Email ID : <input type="email" onChange={this.onChange1} />
          </h2>
          <h2>
            Password : <input type="password" onChange={this.onChange2} />
          </h2>
        </div>

        <div>
        <p>{this.setState.nav}</p> 
          <nav>
           
              <button type="submit" onClick={this.onSubmit}>
              <Link to = "/Welcome">
                Submit
                </Link>
              </button>
              {/* {/* <p>{this.setState.nav}</p> */}
            


          </nav>
        </div>
        
      </div>
      
    );
  }
}

export default Regis_x;
