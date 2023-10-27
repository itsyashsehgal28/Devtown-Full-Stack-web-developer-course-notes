import React from "react";

function FunctionalComponent() {
    return (
        <div>
            <p> This is Functional Component</p>
        </div>
    )
};

export default FunctionalComponent ; 

/*
    functionalComponent may not work if we use arrow functions so we have to do it this way 
    const FunctionalComponent = () => {  return (
            <div>
            <p> This is Functional Component</p>
        </div>
    )}
*/