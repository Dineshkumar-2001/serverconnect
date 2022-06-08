import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Jeens from "./FlipCard/Jeens";
// import T_shirts from "./FlipCard/T_shirts";
// import Belt from "./FlipCard/Belts";

export default class Header extends Component {
  render() {
    return (
      <div>
           <nav>

<Link to='/Jeens' >
   <button className='button'>  
     JEAN
   </button>
</Link>

<Link to="/T_shirts"  >
   <button className='button'>
  T-SHIRTS
  </button>
</Link>

<Link to="/Belts"  >
   <button className='button'>
BELT
</button>
</Link>
</nav>
      </div>
    )
  }
}
