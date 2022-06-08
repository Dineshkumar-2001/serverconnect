import React, { Component } from "react";
// import React, { Component } from "react";
import "./Email.css";
// import Email_01 from "./Email_01_check";
import { Link , Navigate } from "react-router-dom";

 class Regis_Ex extends Component.React{
    constructor(){
        super()
        this.state ={
            name: "",
            age: "",
            email: "",
            password: "",
        }
    }

    handleChange = (e) => {

        const target = e.target;

        this.setState({

            [target.name]: target.value

        })

    }



    submitHandler = (event) => {

        console.log(event);

        event.preventDefault()

        const { email, password } = this.state

        let find =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!email.match(find)) {

            alert("invalid email")

        }

        else if (password.length < 10) {

            alert("You should give strong password")

        }
        else {




            let tot = JSON.parse(localStorage.getItem("tot")) || [];

            let filt = tot.map((m) => m.email)

            let { email } = this.state

            if (filt.includes(email)) {

                alert(" already used this email");

            }

            else {

                tot.push({ email: this.state.email, password: this.state.password })

                alert("successfully login")

            }



            localStorage.setItem("tot", JSON.stringify(tot));

            console.log(tot);

        }

        this.setState({ email: "", password: "" })
    
}

render() {

    return (

        <div>

            <form onSubmit={this.submitHandler}>



                <h2>REGISTRATION FORM</h2>

                <label>Age</label>

<input></input>

<br />

<label>E_mail</label>

<input type="mail" name="email" value={this.state.email} onChange={this.handleChange}></input>

<br />



<label>Password</label>  

  <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>

                    <br />

                    <br />



                    <button type="submit">confirm</button>

                    <nav><Link to="/Login"><button>Login</button></Link></nav>



                </form>

            </div>

        )

    }

}

export default Regis_Ex