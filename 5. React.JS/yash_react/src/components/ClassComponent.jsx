// THIS IS AN EXAMPLE OF CLASS COMPONENT AND ITS STRUCTURE

import React from 'react';

class ClassComponent extends React.Component{
    // ClassComponent is a custom class 
    // it needs feature Component which is present in React


    render(){
        // 1 METHOD IS MANDATORY TO BE PRESENT IN CLASS COMPONENT -----> RENDER METHOD
        // you cannot use return in class component alone it shows error you can only use it in render function
        return (
            <div className="App">
                <p>This is class Component</p>
            </div>
          );
    }
}

export default ClassComponent ;