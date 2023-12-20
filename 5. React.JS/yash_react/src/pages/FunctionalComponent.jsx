import React , {useState} from "react";
import BaseHoc from "../hoc/BaseHoc";

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
    const FunctionalComponent = (props) => 
    // props : {name : "DevTown" , age : 20 , author : "yash"} ------> variable props contains these values
    {  
        const [count , setCount] = useState(0)
        const [changeName , setChangeName] = useState("")

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
                <h4>Hello my name is {props.author} i am the owner of {props.name} and i am {props.age} years old</h4>
                 {/* props : {name : "DevTown" , age : 20 , author : "yash"} ------> variable props contains these values */}

                 <input onChange={(e)=> setChangeName(e.target.value)}></input>
                {/* <button onClick={()=> props.setName("Yash Technologies")}>Change company name to ...</button> */}
                <button onClick={()=> props.setName(changeName)}>Change company name to ...</button>
                <br></br>
                

                
            </div>
        )
    }

// when we use JS inside of html we use {}


// export default FunctionalComponent ;
// since we now use basehoc this component is a parameter to that function 
export default BaseHoc(FunctionalComponent); 

/*
    RECAP OF WHAT HAPPENED : 
        
        PROPS SAMJHANE K LIYE HUMNE PROPS AS PARAMETER LIYA JO ACCESS KAR RHA H KUCH VALUES KO JO APP.JS MAI PADI H 

        EK VARIABLE / STATE BNAYI COUNT AUR FER 2 FUNCTIONS USSE REALTED EK PLUS K LIYE EK MINUS WITH DIFFERENT APPROACHES 
        
        ACCESS KARNA SEEKHA WITH PROPS.NAME LIKE IN DICTIONARY

        ONCHANGE STORES THE CHANGES : console.log(e.target.value) karke dekh lo 

        JO HUMARA ENTERED INPUT HOGA VO STORE HOGA TARGET VALUE MAI ---> JO VALUE AAYI USE HUM AS NAME SET KARDENGE 

        SETNAME CAME FROM APP.JS
*/
    
