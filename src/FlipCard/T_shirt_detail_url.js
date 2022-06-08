import React, { Component } from 'react'
import T_shirt from "./T_shirt.json";
 import Button from '@mui/material/Button';
 import T_shirt_navbar from "./T_shirt_navbar";
 import Navbar from "./Navbar";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

export default class T_shirt_detail_url extends Component {
    constructor() {
        super();
        this.state = {
          show: true,
          id: "",
          prize: "",
          Add_card_1: 0,
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

    //   Add_card_product = () =>{
    //     this.setState({
    //  Add_card_1:this.state.Add_card_1 += 1
   
    //     })
    //    //  console.log(this.state.Add_card)
    //     localStorage.setItem('T_shirt_1',JSON.stringify(this.state.Add_card_1))
    //   }

    Add_card_product = (x)=>{
      let data = JSON.parse(localStorage.getItem("Tshirt"))||[]

      data.push({id:x.id,name:x.name})
      localStorage.setItem("Tshit",JSON.stringify(data))
    }

  render() {
    return (
      <div>

<div className="Main_head">
          <Link to="./Home">
          <HomeIcon
            color="primary"
            style={{ fontSize: "70px" }}
            onClick={this.click4}
          ></HomeIcon>
        </Link>

          <Navbar/>
          </div>

<div className="Main_Tshirt">
        <div>
          <h1></h1>
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
                <div className="Jean_img">
                  <div>
                    
                    <img style={{borderRadius:"20px",border:"3px solid black"}}
                      onClick={() =>
                        this.products(T_shirt.id, T_shirt.Prize, T_shirt.name)
                      }
                      src={T_shirt.link}
                    />
                    {/* <img onClick={this.hide_jean} src={Jeen.link1} /> */}
                  </div>
                </div>

                <div className="Text_colour">
                  <h1>{T_shirt.name}</h1>
                </div>

                <div>
                  <h4 className="Text_colour">PRIZE : ${T_shirt.Prize} </h4>
                </div>

                <div>
                  <Button variant="contained" color="success" onClick={()=>this.Add_card_product(T_shirt)}>
                    BUY
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <>
              <h1>{this.state.show ? null :this.state.id}
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
    )
  }
}

