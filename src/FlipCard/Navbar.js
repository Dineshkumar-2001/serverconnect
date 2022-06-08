import React, { Component } from "react";

import T_shirts from "./T_shirts";
import Belt from "./Belts";
import "./Flipkart.css";

import T_shirt from "./T_shirt.json";
import Belts from "./Belt.json";
import Jeens from "./Jeens";

import Button from "@mui/material/Button";

import HomeIcon from "@mui/icons-material/Home";
import CardTravelIcon from "@mui/icons-material/CardTravel";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Routes,
} from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      showJean: false,
      showTshirt: false,
      showBelt: false,
      showHome: false,
    };
  }

 

  

  

 

  render() {
    return (
      <div  >
        <div className="Main_head_1">
        <div  style={{ display:'flex' }}>
             <div style={{ marginTop:'5px'}}>
             <Link to="./Jean_detail">
              <Button
               
                className="button"
                variant="contained"
              >
                Jean
              </Button>
            </Link>

            <Link to="./T_shirts_details">
              <Button
                
                className="button"
                variant="contained"
                color="success"
              >
                T-Shirt
              </Button>
            </Link>

            <Link to="./Belts_details">
              <Button
              
                className="button"
                variant="contained"
              >
                Belt
              </Button>
            </Link>


             </div>
          <div className="Home_head"  style={{ display: "flex", justfyContent: "center", marginLeft:'280px', marginTop:'-10px' }}>
            <h3 className="header1">WELCOME TO VALOR SHOP</h3>

            <Link to="./Home">
              <HomeIcon color="primary" style={{ fontSize: "50px" }}></HomeIcon>
            </Link>

            <Link to="/Add_to_card">
              <CardTravelIcon
                color="primary"
                style={{ fontSize: "50px" }}
              ></CardTravelIcon>
            </Link>

           


          </div>

          <div
            className="header-container"
            // style={{ display: "flex", justfyContent: "center" }}
          >

<Link to="/Email_01_check" style={{ textDecoration: "none" , marginLeft:'300px' ,  }}>
              <Button className="Head_logout" variant="contained" color="error" style={{marginTop:'5px'}}>
                Log out
              </Button>
            </Link>
               
          </div>


          </div>

          
        </div>

        <div>


        </div>

        

       
      </div>
    );
  }
}
