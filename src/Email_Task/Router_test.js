import React, { Component } from "react";
import { Link , NavLink} from 'react-router-dom'

import "./Email.css";

export default class Router_test extends Component {
  render() {

    if(localStorage.getItem("New")==null){
      return <NavLink to='/'/>
    }

    let ff =  ()=>{
      localStorage.removeItem("New")
    }
    console.log('callimg');
    return (
      <div>
       <h1> WELCOME </h1>   
           <button>
       <Link to='/Email_01_check'>Log out</Link>
       </button>
      </div>
    );
  }
}
