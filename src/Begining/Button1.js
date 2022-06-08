import React from 'react' ;
import ReactDOM from 'react-dom';

// function Button11(){
//     return (
    
//     <div>
//         <h1>hello</h1>
//     </div>  
//     )

//     function good(){
//         return(
//             <div>
//             <button>Click here</button>
//             </div>
//         )
//     }
    
// }

function Button(){
    const ready = () =>{
        alert('Good match')
    }

    return (
        <button onClick={ready}>Take the shot!</button>
      );
    }

    // ReactDOM.render(<football />, document.getElementById('root'));

 export default Button;