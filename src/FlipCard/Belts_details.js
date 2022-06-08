import React, { Component } from "react";
import Belts from "./Belt.json";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Belt_url from "./Belt_url";
import Navbar from "./Navbar";

import Home from "./Home";

export default class Belts_details extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      id: "",
      prize: "",
      name:''
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
    let data1 = [];

    data1.push({ id: x.id, name: x.name, Prize:x.Prize, link:x.link});
    localStorage.setItem("Belt", JSON.stringify(data1));
  };

  Add_product = (pass) => {
    let Jean_store =JSON.parse(localStorage.getItem("Jean")) || [];

    Jean_store.push({ id: pass.id, name: pass.name, Prize: pass.Prize, link:pass.link });
    localStorage.setItem("Jean", JSON.stringify(Jean_store));
  };

  Buy_now = (y) =>{
    let Buy =  [];
    // let Buy = JSON.parse(localStorage.getItem("Buy_belt_product")) || [];

    Buy.push({ id: y.id, name: y.name, Prize: y.Prize, link:y.link });
    localStorage.setItem("Buy_belt_product", JSON.stringify(Buy));
  };
  

  render() {
    return (
      <div>
       <div>
         <Navbar/>
       </div>
        <div className="Main_Belt">
         
          <div>
            <h1></h1>
            <h1
              style={{ display: "flex", justifyContent: "center" }}
              className="Text_colour"
            >
              Branded BELTS Available
            </h1>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {this.state.show ? (
              Belts.map((Belts) => (
                <div>
                  <Card style={{ paddingBottom:'15px'}}>
                  <div>
                  
                      <Link to='/Belt_url'>
                      <img
                        className="Jean_img"
                        style={{
                         
                        }}
                        onClick={
                          ()=>this.Add_card_product(Belts)
                        }
                        src={Belts.link}
                      />
                      </Link>
                      {/* <img onClick={this.hide_jean} src={Jeen.link1} /> */}
                    
                  </div>

                  <div style={{display:'flex',justifyContent:'space-around'}}>

                  <div className="Text_colour">
                    <h3>{Belts.name}</h3>
                  </div>

                  <div>
                    <h3 className="Text_colour"> ${Belts.Prize} </h3>
                  </div>

                  </div>

                  <div className="Button_space">
                   
                  <div>
                    <Button variant="contained" color="success"   onClick={()=>this.Add_product(Belts)} >
                      Add to cart
                    </Button>
                    </div>
                    <div>
                    <Link to='./process_page'>
                    <Button className="Button_space" variant="contained"
                      color="success"  onClick={()=>this.Buy_now(Belts)}
                      >
                        Buy Now
                        </Button>
                      </Link>
                      </div>
                    
                   
                  </div>
                  </Card>
                   
                   
                   
                 

                    <Card style={{marginTop:'30px', paddingBottom:'15px'}}>
                  <div>
                      <Link to='/Belt_url'>
                      <img
                        className="Jean_img"
                        style={{
                         
                        }}
                        onClick={
                          ()=>this.Add_card_product(Belts)
                        }
                        src={Belts.link}
                      />
                      </Link>
                      {/* <img onClick={this.hide_jean} src={Jeen.link1} /> */}
                    </div>


                    <div style={{display:'flex',justifyContent:'space-around'}}>

                  <div className="Text_colour">
                    <h3>{Belts.name}</h3>
                  </div>

                  <div>
                    <h3 className="Text_colour"> ${Belts.Prize} </h3>
                  </div>

                  </div>
                  <div className="Button_space">
                  <div>
                    <Button variant="contained" color="success"   onClick={()=>this.Add_product(Belts)} >
                      Add to cart
                    </Button>
                    </div>
                    <div>
                    <Link to='./process_page'>
                    <Button className="Button_space" variant="contained"
                      color="success"  onClick={()=>this.Buy_now(Belts)}
                      >
                        Buy Now
                        </Button>
                      </Link>
                      </div>
                    
                   
                  </div>
                  </Card>

                  



                 

                </div>
              ))
            ) : (
              <>
                <h1>
                  {this.state.id}
                  <br />
                </h1>
                <h1>
                  {" "}
                  {this.state.show ? null : this.state.prize}
                  <br />{" "}
                </h1>
                <h1> {this.state.show ? null : this.state.name}</h1>
              </>
            )}
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}
