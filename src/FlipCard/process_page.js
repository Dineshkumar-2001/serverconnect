import React, { Component } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Add_to_cart_header from "./Add_to_cart_header";
import Card from "@mui/material/Card";
import Navbar from "./Navbar";

export default class process_page extends Component {
  render() {
    const get_amount = JSON.parse(localStorage.getItem("amount"));
    // const Buy_item = JSON.parse(localStorage.getItem("Buy_Tshirt_product"));
    // const Buy_jean_item = JSON.parse(localStorage.getItem("Buy_Jean_product"));
    const Buy_belt_item = JSON.parse(localStorage.getItem("Buy_belt_product"));
    return (
      <div>
        <div>
        <Navbar />
        </div>
        <div style={{marginTop:'130px'}}>
          <h1>Total Prize : $ {get_amount}</h1>
        </div>
        <div>
          <Link to="/Buy_success">
            <Button variant="contained" color="success">
              {" "}
              BUY NOW{" "}
            </Button>
          </Link>
        </div>

        
        <div style={{display:'flex',justifyContent:'space-around', marginTop:'20px'}}>
        {/* <Card  style={{padding:'10px'}}>
        <div>
          {Buy_item.map((y1) => {
            return (
              <div style={{display:'flex'}}>
                 <img src={y1.link} /> <br />
                 <div>
                <h3>{y1.name}</h3>          
                <h3>$ {y1.Prize}</h3>
                </div>
              </div>
            );
          })}
        </div>
        </Card> */}

        {/* <Card style={{padding:'10px'}}>
        <div>
           {Buy_jean_item.map((z1) => {
            return (
              <div  style={{display:'flex'}}>
                 <img src={z1.link} /> <br />
                 <div>
                <h3>{z1.name}</h3> <br />
               
                <h3>$ {z1.Prize}</h3>
                </div>
              </div>
            );
          })}

        </div>
        </Card> */}

      
        <div>

        {Buy_belt_item.map((d1) => {
            return (
              <div >
                <h1>Prize : $ {d1.Prize}</h1>
                  <Card style={{padding:'10px'}}>
                 <img src={d1.link} /> <br />
                 <h3>{d1.name}</h3> 
                 </Card>
                 <div>
          <Link to="/Buy_success">
            <Button variant="contained" color="success" style={{margin:'10px'}}>
              {" "}
              BUY NOW{" "}
            </Button>
          </Link>
        </div>
              </div>
            );
          })}
        </div>
       



        {/* <Card style={{padding:'10px'}}>
        <div>

        {Buy_belt_item.map((d1) => {
            return (
              <div  style={{display:'flex'}}>
                 <img src={d1.link} /> <br />
                 <div>
                <h3>{d1.name}</h3> <br />
               
                <h3>$ {d1.Prize}</h3>
                </div>
              </div>
            );
          })}
        </div>
        </Card> */}
        
        </div>
       


      </div>
    );
  }
}
