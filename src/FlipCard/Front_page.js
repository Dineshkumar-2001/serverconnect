import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import   './Flipkart.css'

export default class Front_page extends Component {
  render() {
    return (
        <div>     
            <div>
          <h1 style={{ display: "flex", justifyContent: "center" }}>
           
            PLEASE CLICK THE BUTTON AND CHECK IT
          </h1>
        </div>
            
             <div style={{ display: "flex", justifyContent: "center" }}>

        
      <div style={{margin:"10px"}}>
      
       <Link to='Jeens' >
           <button className='button'>  
             JEAN
           </button>

       </Link>
       
       </div>


       <div style={{padding:"10px"}}>

       <Link to="T_shirts"  >
           <button className='button'>
          T-SHIRTS
          </button>
       </Link>
       </div>


         <div style={{padding:"10px"}}>
       <Link to="Belts"  >
           <button className='button'>
       BELT
       </button>
       </Link>
      
       </div>

       


      

      </div>
     
      </div>

    )
  }
}
