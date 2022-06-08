import React from 'react';
import Sideabar from './sidebar';

function Header()
{
    return(
        <div>
         <h1>this is header page</h1>
        <button onClick={()=>{alert("hi this is header page")}}>click me</button>

        <Sideabar/>
        
        </div>
       
    );
    
}


export default Header;
