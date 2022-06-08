import React, { Component } from "react";
import Belts from "./Belt.json";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "@mui/icons-material/Home";

export default class Belt_detail_url extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      id: "",
      prize: "",
      Add_card_1: 0,
    };
  }

  Add_card_product = () =>{
    this.setState({
 Add_card_1:this.state.Add_card_1 += 1

    })
   //  console.log(this.state.Add_card)
    localStorage.setItem('Belt_1',JSON.stringify(this.state.Add_card_1))
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

  render() {
    return (
      <div>
        <Home/>
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
                  <div>
                    <div>
                      <img
                        className="Jean_img"
                        style={{
                          borderRadius: "20px",
                          border: "3px solid black",
                        }}
                        onClick={() =>
                          this.products(Belts.id, Belts.Prize, Belts.name)
                        }
                        src={Belts.link}
                      />
                      {/* <img onClick={this.hide_jean} src={Jeen.link1} /> */}
                    </div>
                  </div>

                  <div className="Text_colour">
                    <h1>{Belts.name}</h1>
                  </div>

                  <div>
                    <h4 className="Text_colour">PRIZE : ${Belts.Prize} </h4>
                  </div>

                  <div>
                    <Button variant="contained" color="success"  onClick={this.Add_card_product}>
                      BUY
                    </Button>
                  </div>
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
