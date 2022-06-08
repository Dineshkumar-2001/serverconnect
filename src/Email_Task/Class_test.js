import React from "react";

class Class_test extends React.Component{
    constructor(){
        super();
        this.state = {name : 'Dinesh', age:21}
    }
    fun = () =>{
        this.setState({
            name : 'Bala'
        })
        
    }
    render(){
        return(
            <div>
                <h1>Hello , My name is {this.state.name}</h1>
                <h2>My age is {this.state.age}</h2>
                <button onClick={this.fun}>Click</button>
            </div>
        )
    }
}

export default Class_test;


