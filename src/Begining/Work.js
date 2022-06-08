import React from "react";
import Detail from "./Detail";

function Work(props){
     console.log("props =>",props);
return(
    <div>
    <h1>Good Morning {props.firstName}</h1>
    <h1>Good Morning {props.lastName}</h1>
    <Detail Role = "Testing"/>
    </div>
)
}
// ReactDOM.render(<Work1 />, document.getElementById('root'));
export default Work;