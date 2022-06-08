import React, { Component } from "react";

class Name_change extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"Dinesh"
        }
    }



    changevalue = () =>{
        this.setState({
            name : this.state.name
        })
    }

    componentDidUpdate(prevProps,prevState)  {
        console.log(prevState)
            this.interval = setTimeout(() =>{
             this.setState({ name: "Good" })
             }, 1000);
            
            return true
        }

    componentDidMount(){
        console.log("componentDidMount")
    }

        
    

    render(){
        return(
            <div>
            <h1>{this.state.name}</h1>
              <button type="button" onClick={this.changevalue}>Click</button>
            </div>
            
        )
    }
}

export default Name_change;