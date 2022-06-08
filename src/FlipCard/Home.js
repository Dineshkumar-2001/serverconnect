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
import Card from "@mui/material/Card";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Routes,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { width } from "@mui/system";

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

  click1 = () => {
    this.setState({
      showJean: true,
      showTshirt: false,
      showBelt: false,
    });
  };

  click2 = () => {
    this.setState({
      showJean: false,
      showTshirt: true,
      showBelt: false,
    });
  };

  click3 = () => {
    this.setState({
      showJean: false,
      showTshirt: false,
      showBelt: true,
    });
  };

  click4 = () => {
    this.setState({
      showJean: false,
      showTshirt: false,
      showBelt: false,
      showHome: true,
    });
  };

  render() {
    return (
      <div >
        <div className="Main_head_1">
          <div className="Home_head">
            <div
              className="header-container"
              style={{ display: "flex", justifyContent:'center', margin:'5px' }}
            >
              <Link to="./Jean_detail">
                <Button
                  onClick={this.click1}
                  className="button"
                  variant="contained"
                >
                  Jean
                </Button>
              </Link>

              <Link to="./T_shirts_details">
                <Button
                  onClick={this.click2}
                  className="button"
                  variant="contained"
                  color="success"
                >
                  T-Shirt
                </Button>
              </Link>

              <Link to="./Belts_details">
                <Button
                  onClick={this.click3}
                  className="button"
                  variant="contained"
                >
                  Belt
                </Button>
              </Link>

              
            </div>
         

          <div  style={{ display: "flex", justfyContent: "center", marginLeft:'280px', marginTop:'-10px' }}>
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

          <div style={{color:'white', marginLeft:'300px'}}>
          <Link to="/Email_01_check" style={{ textDecoration: "none" }}>
                <Button
                  style={{marginTop:'5px'}}
                  className="Head_logout"
                  variant="contained"
                  color="error"
                >
                  Log out
                </Button>
              </Link>
            </div>
          </div>
          
        </div>

        <div className="Home_picture">
          <Card>
            <div>
              <img src="https://th.bing.com/th/id/OIP.2UQh85VONuWp7gc-zGdWsgHaJc?w=185&h=236&c=7&r=0&o=5&pid=1.7"></img>
              <Link to="./Jean_detail" style={{ textDecoration: "none" }}>
                <div>
                  <Button
                    style={{ margin: "10px" }}
                    variant="contained"
                    color="success"
                  >
                    View Details
                  </Button>
                </div>
              </Link>
            </div>
          </Card>

          <Card>
            <div>
              <img src="https://th.bing.com/th/id/OIP.ekd-9OxmU7b7F5WDcd9gKQHaJ4?w=185&h=247&c=7&r=0&o=5&pid=1.7"></img>
              <Link to="./T_shirts_details" style={{ textDecoration: "none" }}>
                <div>
                  <Button
                    style={{ margin: "10px" }}
                    variant="contained"
                    color="success"
                  >
                    View Details
                  </Button>
                </div>
              </Link>
            </div>
          </Card>

          <Card>
            <div>
              <img
                style={{ height: "250px", width: "200px" }}
                src="https://th.bing.com/th/id/OIP.l5_gQDUjoc4Tk6NvnN-RxAHaIK?w=164&h=180&c=7&r=0&o=5&pid=1.7"
              ></img>
              <Link to="./Belts_details" style={{ textDecoration: "none" }}>
                <div>
                  <Button
                    style={{ margin: "10px" }}
                    variant="contained"
                    color="success"
                  >
                    View Details
                  </Button>
                </div>
              </Link>
            </div>
          </Card>
        </div>

        {/* {this.state.showJean ? <Jeens /> : null} 
{this.state.showTshirt ? <T_shirts /> : null}
{this.state.showBelt ? <Belt /> : null}
{this.state.showHome ? <Home /> : null}  */}
      </div>
    );
  }
}
