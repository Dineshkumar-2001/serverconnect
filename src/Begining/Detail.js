function Detail(props){
    console.log("detail component",props)
    return(
        <div>
        <h1 style={{color:"red"}}>
            My role is {props.Role}
            
        </h1>
        {/* <h1>my name {props.name}</h1> */}
        </div>
    )
}

export default Detail;