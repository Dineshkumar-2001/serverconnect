import React, { Component } from 'react'

export default class Test extends Component {
    constructor(){
        super();
        this.state={
            show:true
        }
    }

    show1 = ()=>{
        this.setState({
            show:false
        })
    }
  render() {
    return (
      <div>

{
    this.state.show?
    <div>
        hide me
    </div>:null
}

<button onClick={this.show1}>
    click
</button>

      </div>
    )
  }
}
