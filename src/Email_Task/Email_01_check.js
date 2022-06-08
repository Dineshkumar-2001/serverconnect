import React from "react";

import "./Email.css";
import {createBrowserHistory} from 'history'
import { Navigate, NavLink , Link} from 'react-router-dom';
import Button from '@mui/material/Button';

// import './App.css';

class Email_01_check extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_1: "",
      password_1: "",
      nav: "",
      name:"Dinesh"
     
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
      const history = createBrowserHistory();
      // alert("Email and password match");
    console.log("365356",this.props.history)

    localStorage.setItem("New","eeerr")
    this.props.history.push('/Home');    
        
    } else  {
        alert("Email not match")
        // this.setState({nav:<Navigate to="/Router_test"></Navigate>})
    }
  };

  componentDidUpdate(prevProps,prevState)  {
    console.log(prevState)
        this.time = setTimeout(() =>{
         this.setState({ name: "Good" })
         }, 1000);
        
        return true
    }

    componentWillUnmount(){
    clearInterval( this.time)
  }

  render() {
    console.log("qqq",this.props)
    if(localStorage.getItem("New")==null){
      // return <Link to='/Router_test'/>
    }
    return (
      <div className="App">
        
        <div>
        <h1>{this.state.name}</h1>
          <h1>Login Page</h1>
          <h2>
            Email ID : <input type="email" onChange={this.onChange1} />
          </h2>
          <h2>
            Password : <input type="password" onChange={this.onChange2} />
          </h2>
        </div>

        <div>
      
          <nav>
           
              <Button type="submit" onClick={this.onSubmit} variant="contained" color="success">
             
                Submit
                
              </Button>
              <h3>
                or
              </h3>
              <nav>
              <Button variant="contained"  color="error">
                <Link to="/">
                REGISTER
                </Link>
              </Button>
              </nav>
              
            


          </nav>
        </div>
        
      </div>
      
    );
  }
}

export default Email_01_check;
