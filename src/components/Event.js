import React from 'react';

/* Event Binding: 
* In functional component we can only have single parent div.
*Line 25 and 26 will show how to render value for parameterized func.
*/
const Event = () => {
    const courseName = "React.JS Tutorial";

    const showWelcome = () =>{
        alert("Welcome to react Tutorial")
    }
    const showWelcome2 = () => {
        alert("Dummy Function!! ")
    }

    const showMessage = (msg) =>{
        alert(msg)
    }
    const onStateChanged = ()=> {
        alert("State has been changed!!")
    }
    const onTextChange = () => {
        console.log("Text value Changed")
    }
    const onMouseIn = () => {
        console.log("Mouse is inside the div")
    }
    const onMouseLeft = () => {
        console.log("Mouse Leave")
    }
    return (
        <div>
            <button onClick = {showWelcome}>Show Welcome</button>
            <br></br>
            <button onClick = {showWelcome2}>Show Welcome 2</button>
            <br/>
            <button onClick = {() => {showMessage('Angular')}}>Show Angular</button>  
            <br/>
            <button onClick = {() => {showMessage('React')}}>Show React</button>
            <br/>
            <select onChange={onStateChanged}>
                <option>Select State</option>
                <option >Maharashtra</option>
                <option >Delhi</option>
                <option >Mumbai</option>
                <option >Nagpur</option>
                <option >Bangalore</option>
               <option>Hyderabad</option> 
            </select>
            <input type = 'text' onChange={onTextChange}></input>

            <div onMouseEnter={onMouseIn} onMouseLeave={onMouseLeft}
            style= {{width: '200px', height:'200px', backgroundColor:'red'}}>Div Area{courseName}</div>
            
        </div>
    );
};

export default Event;