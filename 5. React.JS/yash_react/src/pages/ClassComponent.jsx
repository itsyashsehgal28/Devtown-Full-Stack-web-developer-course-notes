// THIS IS AN EXAMPLE OF CLASS COMPONENT AND ITS STRUCTURE

import React from 'react';
import BaseHoc from '../hoc/BaseHoc';

class ClassComponent extends React.Component{
    // ClassComponent is a custom class 
    // it needs feature Component which is present in React
    // always keep in mind that name of class should be same as name of the file 
   
    /*
        constructor(){
            super()
                super means its inheriting features of parent class
                here by super we will assign parameters from class component to react component
        }

        this is a default constructor which is automatically invoked when we call a class , we have to use the keyword constructor
    */
    
    constructor(props){
        // you cannot add anything before super it raises an error that its not allowed 
        // super should be the first instruction present in your constructor 
        super(props)
        // here super(props means we are assigning the values we got as parameters to the component)
        this.state = {
            name : "DevTown" , 
            age : 5
            // this is assigning some default values 
        };
    }


    render(){
        // 1 METHOD IS MANDATORY TO BE PRESENT IN CLASS COMPONENT -----> RENDER METHOD
        // you cannot use return in class component alone it shows error you can only use it in render function
        // hence to use return function you will have to use render function 
        return (
            <>
                <p>This is class Component</p>
            </>
            // these are fragments , used instead of DIVs cause they are irritating
        );
    }
}

// export default ClassComponent ;
// since now this classComponent is a parameter of the base HOC so 

export default BaseHoc(ClassComponent);
// this will go to basehoc