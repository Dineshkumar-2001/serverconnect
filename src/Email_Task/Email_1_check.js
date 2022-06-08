import React from "react";
import './Email.css'

// import './App.css';


const email_ID = {
    email: '',
    password : ''
}
class Email_1_check extends React.Component {  
    
    constructor(){
        super();
        this.state = email_ID;   
         
    }

    onChange1 = (event) => {
        this.setState({
            email : event.target.value
            
        });
        console.log("target",event.target.value)
    }

    onChange2 = (m) =>{
        this.setState({
            password : m.target.value
        })
    }  

    emailValidation(){
        // const kk = localStorage.getItem(Email)
        // const kk1 = localStorage.getItem(Password)
        const regular_EX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!this.state.email || regular_EX.test(this.state.email) === false   ){
            
                alert("Email is not valid")
                return false;            
        }

           return true;
    }

    onSubmit = () => {

         if(this.emailValidation()){
            if(this.state.password == 12345){
                alert("Email is valid")
             }else{
                 alert("Wrong password")
             }            
        }

        console.log((this.state))

    }
    
    render(){
        return(
            <div className="App">
                <div >
                    <h1>Email Validation</h1>
                    <h2>Email ID :  <input type="email"  onChange={this.onChange1} /> </h2>
                    <h2>Password :  <input type="password"  onChange={this.onChange2}/> </h2>
                 </div>

                <div >
                    <button type="submit"  onClick={this.onSubmit}>Submit</button>
                </div>  
                <h2>{JSON.stringify(this.state)}</h2>
            </div>
        )  
    }
}  

 export default Email_1_check;
