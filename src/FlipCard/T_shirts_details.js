import React, { Component } from "react";
import T_shirt from "./T_shirt.json";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Home from "./Home";
import Navbar from "./Navbar";

export default class T_shirts_details extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      id: "",
      prize: "",
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
    let data =  [];

    data.push({ id: x.id, name: x.name, Prize: x.Prize, link:x.link });
    localStorage.setItem("T_shirt", JSON.stringify(data));
  };

  Add_product = (pass) => {
    let Tshirt_store =JSON.parse(localStorage.getItem("Jean")) || [];

    Tshirt_store.push({ id: pass.id, name: pass.name, Prize: pass.Prize, link:pass.link });
    localStorage.setItem("Jean", JSON.stringify(Tshirt_store));
  };

  Buy_now = (y) =>{
    let Buy =  [];

    Buy.push({ id: y.id, name: y.name, Prize: y.Prize, link:y.link });
    localStorage.setItem("Buy_belt_product", JSON.stringify(Buy));
  };
  

  render() {
    return (
      <div style={{overflowX:'hidden', msOverflowY:'hidden'}}>
        <div>
          <Navbar />
        </div>
        <div className="Main_Tshirt">
          <div>
            
           
            <h1
              style={{ display: "flex", justifyContent: "center" }}
              className="Text_colour"
            >
              Branded T-SHIRT Available
            </h1>
            

          
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            {this.state.show ? (
              T_shirt.map((T_shirt) => (
                <div>
                   <Card>

                     {/*------------------ first row start------------------------ */}

                  <div className="Jean_img">
                    
                      <Link to='/T_shirt_url_change'>
                      <img
                        style={{
                          
                        }}
                        onClick={() => this.Add_card_product(T_shirt)}
                        src={T_shirt.link}
                      />
                      </Link>
                      {/* <img onClick={this.hide_jean} src={Jeen.link1} /> */}
                    
                  </div>


                  <div style={{display:'flex',justifyContent:'space-around',padding:'13px 0px'}}>

                  <div className="Text_colour">
                    <h3>{T_shirt.name}</h3>
                  </div>

                  <div>
                    <h3 className="Text_colour"> $ {T_shirt.Prize} </h3>
                  </div>

                  </div>


                  <div className="Button_space" style={{paddingBottom:'25px', marginLeft:'20px'}}>
                    <div>
                    <Button style={{ marginRight:'20px'}} variant="contained" color="success" onClick={()=>this.Add_product(T_shirt)}>
                      ADD TO CART
                    </Button>
                    </div>


                    <div>
                      <Link to='./process_page'>
                    <Button className="Button_space" variant="contained" style={{ marginRight:'20px'}}
                      color="success" onClick={()=>this.Buy_now(T_shirt)}>
                        Buy Now
                        </Button>
                      </Link>
                      </div>

                      
                  </div>

                  </Card>


                  {/*------------------ Second row start------------------------ */}
                  <Card  style={{marginTop:'30px'}}>
                  <div>
                      <Link to='/T_shirt_url_change'>
                      <img
                        style={{
                          marginTop:'20px'
                        }}
                        onClick={() => this.Add_card_product(T_shirt)}
                        src={T_shirt.link}
                      />
                      </Link>
                      {/* <img onClick={this.hide_jean} src={Jeen.link1} /> */}
                    </div>

                    <div style={{display:'flex',justifyContent:'space-around',padding:'13px 0px'}}>
                    <div className="Text_colour">
                    <h3>{T_shirt.name}</h3>
                  </div>

                  <div>
                    <h3 className="Text_colour"> ${T_shirt.Prize} </h3>
                  </div>
                  </div>

                  <div className="Button_space" style={{paddingBottom:'15px'}}>
                    <div>
                    <Button variant="contained" color="success" onClick={()=>this.Add_product(T_shirt)}>
                      ADD TO CART
                    </Button>
                    </div>


                    <div>
                      <Link to='./process_page'>
                    <Button className="Button_space" variant="contained"
                      color="success" onClick={()=>this.Buy_now(T_shirt)}>
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
                  {this.state.show ? null : this.state.id}
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
        </div>
      </div>
    );
  }
}



