import React, { Component } from "react";
class Lifecycle_check extends React.Component {
  constructor() {
    super();
    this.state = { Value: "Good Morning", Name: "Dinesh" };
  }

  

  componentDidUpdate() {
    document.getElementById("Mydiv").innerHTML =
      "ComponentDidupdate run  after render run" 
  }

  componentDidMount() {
    console.log(" componentDidMount Run");
  }

  componentWillUnmount(){
      console.log("componentWillUnmount")
  }

  changevalue = () =>{
      this.setState({
          Name : "Sumesh Kumar"
      })
  }

  shouldComponentUpdate(){
       console.log("shouldComponentUpdate", this.state.Value)
       return true
  }


 


  render() {
    return (
      <div>
        <h1>
          {this.state.Value} {this.state.Name}
          
        </h1>

       <button type="button" onClick={this.changevalue}>
           Change Name
       </button>
        <div>
          <h3 id="Mydiv"> </h3>
        </div>
      </div>
    );
  }
}
export default Lifecycle_check;
