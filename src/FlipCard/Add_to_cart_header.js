import React, { Component } from "react";
import HomeIcon from "@mui/icons-material/Home";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";


export default class Add_to_cart_header extends Component {
  render() {
    return (
      
      <div className="Main_head">
        <div style={{display:'flex', justifyContent:'center'}}>
          <h3 className="header1">WELCOME TO VALOR SHOP</h3>

          <div>
          <HomeIcon color="primary" style={{ fontSize: "50px",marginTop:'5px' }}></HomeIcon>

          <Link to="/Add_to_card">
            <CardTravelIcon
              color="primary"
              style={{ fontSize: "50px" }}
            ></CardTravelIcon>
          </Link>
          </div>
          </div>

          <div>
          <Link to="./Home">
            <Button
              variant="contained"
              color="success"
              style={{ marginRight: "85%", marginTop: "-5%" }}
            >
              BACK
            </Button>
          </Link>
          </div>

        
        

          
          </div>
      //   </div>
      // </div>
    );
  }
}
