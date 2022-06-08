import React, { Component } from "react";
import Jeen from "./Jeen.json";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Home from "./Home";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navbar from "./Navbar";

export default class Jean_detail extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      id: "",
      prize: "",
      Add_card: 0,
    };
  }

  products = (id, prize, name) => {
    this.setState({
      id,
      prize,
      name,
      show: false,
    });
    console.log("id=>>>>>", id);
    console.log("prize====>", prize);
    console.log("Name ===>", name);
  };

  Add_card_product = (x) => {
    let data = [];

    data.push({ id: x.id, name: x.name, Prize: x.Prize, link: x.link });
    localStorage.setItem("Jean1", JSON.stringify(data));
  };

  Add_product = (pass) => {
    let Jean_store = JSON.parse(localStorage.getItem("Jean")) || [];

    Jean_store.push({
      id: pass.id,
      name: pass.name,
      Prize: pass.Prize,
      link: pass.link,
    });
    localStorage.setItem("Jean", JSON.stringify(Jean_store));
  };

  Buy_now = (y) => {
    let Buy = [];

    Buy.push({ id: y.id, name: y.name, Prize: y.Prize, link: y.link });
    localStorage.setItem("Buy_belt_product", JSON.stringify(Buy));
  };

  render() {
   
    return (
     
      <div>
          <div>
             <Navbar />
             </div>
        <div>
          
        </div>
        <div className="Main_jean">
          <div>
            <h1></h1>
            <h1
              style={{ display: "flex", justifyContent: "center" }}
              className="Text_colour"
            >
              Branded JEANS Available
            </h1>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {this.state.show ? (
              Jeen.map((Jeen) => (
                
              

                 <div>
                   <Card style={{paddingBottom:'10px'}}>
                  <div className="Jean_img">
                    <div>
                    <div>
                    <Link to="/Jeen_url">
                      <img
                        style={{
                          height: "220px",
                          width: "200px",
                        }}
                        onClick={() => this.Add_card_product(Jeen)}
                        src={Jeen.link}
                      />
                    </Link>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      padding: "13px 0px",
                    }}
                  >
                    {/* <Card style={{display:'flex',justifyContent:'space-around'}}> */}
                    <div className="Text_colour">
                      <h3>{Jeen.name}</h3>
                    </div>

                    <div>
                      <h3 className="Text_colour"> ${Jeen.Prize} </h3>
                    </div>
                  </div>

                  {/* </Card> */}
                  <div className="Button_space">
                    <div>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => this.Add_product(Jeen)}
                      >
                        ADD TO CART
                      </Button>
                    </div>
                    <div>
                      <Link to="./process_page">
                        <Button
                          className="Button_space"
                          variant="contained"
                          color="success"
                          onClick={() => this.Buy_now(Jeen)}
                        >
                          Buy Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                  </div>
                  
                  </div>
                  </Card>
                  
                  <Card style={{marginTop:'30px'}}>
                  <div>
                  <div>
                    <Link to="/Jeen_url">
                      <img
                        style={{
                          height: "220px",
                          width: "200px",
                         
                        }}
                        onClick={() => this.Add_card_product(Jeen)}
                        src={Jeen.link1}
                      />
                    </Link>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      padding: "13px 0px",
                    }}
                  >
                    <div className="Text_colour">
                      <h3>{Jeen.name}</h3>
                    </div>

                    <div>
                      <h3 className="Text_colour"> ${Jeen.Prize} </h3>
                    </div>
                  </div>

                  <div
                    style={{ paddingBottom: "13px " }}
                    className="Button_space"
                  >
                    <div>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => this.Add_product(Jeen)}
                      >
                        ADD TO CART
                      </Button>
                    </div>
                    <div>
                      <Link to="./process_page">
                        <Button
                          className="Button_space"
                          variant="contained"
                          color="success"
                          onClick={() => this.Buy_now(Jeen)}
                        >
                          Buy Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                  </div>
                  </Card>
                  </div>
                
              ))
            ) : (
              <>
                <h1>
                  {this.state.show ? null : this.state.id}
                  <br />
                </h1>
                <h1>
                  {" "}
                  {this.state.show ? null : this.state.prize}
                  <br />{" "}
                </h1>
                <h1> {this.state.show ? null : this.state.name}</h1>
                {/* <h1> {this.state.show ? null :<Button variant="contained" color="success" onClick={()=>this.back_button_1()}> BACK</Button>}</h1> */}
              </>
            )}
          </div>
        </div>

        {/* </Grid>
    </Box> */}
      </div>
    );
  }
}
