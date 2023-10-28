import React , {useState} from "react";

/*
    function FunctionalComponent() {
        return (
            <div>
                <p> This is Functional Component</p>
            </div>
        )
    };
*/

//functionalComponent may not work if we don't use arrow functions so we have to do it this way 
    const FunctionalComponent = () => 
    {  
        const [count , setCount] = useState(0)

        const reduceCount = () => {
            setCount(count -1)
        }

        return (
            <div>
                <p> This is Functional Component</p>
                <button onClick={() => setCount(count+1)}>Click me to increment by 1</button>
                {/* WE HAVE TO USE ARROW FUNCTION HERE TOO OTHERWISE IT WONT WORK */}

                <button onClick={reduceCount}>Click me to decrement by 1</button>
                {/* we can define it here also or above and call it here but variable will only be set by setCount
                    function name can be anything but the function name of state should be same
                */}

                <h3>{count}</h3>
            </div>
        )
    }

// when we use JS inside of html we use {}
export default FunctionalComponent ; 


    
