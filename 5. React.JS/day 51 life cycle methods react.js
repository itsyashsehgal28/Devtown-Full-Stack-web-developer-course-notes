// if we are working on a big project we have a lot of DIVs so instead of that we can use FRAGMENTS 
// <> </> see example in classComponent

// CONSTRUCTOR DEALS WITH OBJECT MEMORY 
// STATIC DEALS WITH CLASS MEMORY 

/* 
React Life Cycle Methods

render(){}
    RENDERS THE COMPONENT , USED IN CLASS COMPONENT NOT IN FUNCTON COMPONENT
    render is also used to render the app in index.js


cdm OR componentDidMount(){}
    Ex: suppose we have 1 website with 4 components , and at start we only want to render 2 components but on some clicks 
        or on some conditions we will render the other 2 components also , thats where CDM comes into play , 
        it checks if the components are loaded or not or how many components are loaded returns value in true or false 

componentWillUnMount(){}
    When the component is done with its task it should just disable , switching from private to public like logging out of insta
    then we wont see our private chats etc.

    hence we will fetch back all ACCESS

*/

// starting with BookMyShow React Application