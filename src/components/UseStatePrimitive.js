import React, { useState } from 'react';

//If we declare the var value like line 5 & if we change the var value from any func it will not show the updated value it will show initialized value.
//UseState will re-render the function.
const UseStatePrimitive = () => {
    let courseName = "Angular";
    let[courseDuration, changeCourseDuration] = useState("2 Months");  //Its like a variable creation. Called as state. It will use when we have to change the value.
//  let[var/state name, func name] = useState(value)


    const changeCourse = () => {
        debugger;
        courseName = "React";
    }

   const changeDuration = () => {
        changeCourseDuration("3 Months");  
    }

    return (
        <div>
            <span>Course Name: {courseName}</span>
            <br></br>
            <button onClick={changeCourse}>Change the Course name</button>
            <br></br>
            <h3>Duration: {courseDuration} </h3>
            <br></br>
            <button onClick={changeDuration}> Change Duration </button>
        </div>
    );
};

export default UseStatePrimitive;