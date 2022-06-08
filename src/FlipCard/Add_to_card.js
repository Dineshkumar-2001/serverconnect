import React, { Component } from "react";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import Home from "./Home";
import Add_to_cart_header from "./Add_to_cart_header";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { border, display } from "@mui/system";
import "./Flipkart.css";
import Card from "@mui/material/Card";
import Navbar from "./Navbar";

export default class Add_to_card extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      referesh: false,
    };
  }
  get_prize = () => {
    let Total_prize = JSON.parse(localStorage.getItem("Jean"));

    let amount = Total_prize.map((e) => e.Prize).reduce(
      (last, curr) => last + curr
    );

    localStorage.setItem("amount", amount);

    console.log(amount);
  };

  componentDidUpdate() {}

  Add_product = (pass) => {
    let Tshirt_store = JSON.parse(localStorage.getItem("Jean")) || [];

    Tshirt_store.push({
      id: pass.id,
      
      name: pass.name,
      Prize: pass.Prize,
      link: pass.link,
    });
    localStorage.setItem("Jean", JSON.stringify(Tshirt_store));

    this.setState({
      referesh: true,
    });

    if (this.state.referesh == true) {
      this.componentDidUpdate();
    }
  };
  render() {
    let Jean_1 = JSON.parse(localStorage.getItem("Jean"));

    return (
      <div>
        <div>
        <Navbar />
        </div>
        <div>
          <div className="container1">
            <div className="container">
              <div className="row">
                {Jean_1.map((x) => {
                  return (
                    <div
                      className="col-md-3"
                      style={{
                        height: "200px",
                        width: "340px",
                        // border: "2px solid",
                        borderRadius: "15px",
                        // margin: "9px",
                        marginLeft: "40px",
                        marginTop: "100px",
                      }}
                    >
                      <Card
                        className="cart"
                        style={{ height: "270px", width: "240px" }}
                      >
                        {/* <br /> */}
                        <img
                          src={x.link}
                          className="name_space"
                          style={{ height: "150px", width: "240px" }}
                        />{" "}
                        <br />
                        <div className="name_prize">
                          <h3> {x.name}</h3>

                          <h3>$ : {x.Prize}</h3>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "5px",
                          }}
                        >
                          <div>
                            <button
                              className="btn btn-success"
                              onClick={() => this.Add_product(x)}
                            >
                              ADD
                            </button>
                          </div>

                          <div>
                            <Button
                              variant="contained"
                              color="error"
                              style={{ marginLeft: "10px", padding: "9px" }}
                              // onClick={() => this.removeFromCart(x)}
                            >
                              REMOVE
                            </Button>
                          </div>
                        </div>
                      </Card>
                      <div></div>
                    </div>
                  );
                })}
              </div>
            </div>

            <Link to="./process_page">
              <Button
                style={{ marginTop: "100px" }}
                variant="contained"
                onClick={() => this.get_prize()}
              >
                <h5>Process </h5>
              </Button>
              {/* <h1 style={{marginTop:'130px'}}>hfh</h1> */}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
