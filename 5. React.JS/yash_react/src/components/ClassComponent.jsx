// THIS IS AN EXAMPLE OF CLASS COMPONENT AND ITS STRUCTURE

import React from 'react';

class ClassComponent extends React.Component{
    // ClassComponent is a custom class 
    // it needs feature Component which is present in React
    // always keep in mind that name of class should be same as name of the file 


    render(){
        // 1 METHOD IS MANDATORY TO BE PRESENT IN CLASS COMPONENT -----> RENDER METHOD
        // you cannot use return in class component alone it shows error you can only use it in render function
        // hence to use return function you will have to use render function 
        return (
            <div className="App">
                <p>This is class Component</p>
            </div>
          );
    }
}

export default ClassComponent ;