
/*
    STATES: Data that is required by the different Components is known as States
            in order to have some DOM operations or if you want to store some information we use states

        STATE VARIABLES HOTE H JAISE HUM JAVASCRIPT MAI USE KARTE THE BS AB AISE DEFINE NHI HOTE
    
        Eg: function sum requires numbers so the data will be the numbers required by the functional component and 
        data will be states

    1. var name = "devtown"   ----> here name is the variable so its the state
    
    2. State = {
        [

        ] , 
        [

        ],
        [

        ]
    }

    we defined states like this before but now 
        const [variable , func] = useState()  ----> the variable in this is our state

*/

/*
    HOOKS : these are used to access the states or access the properties of the states
    it is a package 

    Hooks mainly work on your state and make sure it reflects on your DOM and front-end too.

    STATES KO DEFINE AUR SET KARNE K LIYE HUM HOOKS KA USE KARTE H , HOOKS HAVE INTERCONNECTIONS WITH STATES AND TALK WITH THEM

    we mainly use 2 functions in Hooks :
    1. useState(): State will store the information req by the component when we want to fetch it we will use hooks and useState 
    
        how to import : 
            import {useState} from 'react';
        
        syntax :
            const [variable , func] = useState() 
            const [count , setCount] = useState()
                here variable which is required is called State (count) and the function is appended by set(setCount)

            we can assign default starting values like this : 
            const [num , setNum] = useState(0)
                here num will have a default value of 0 , then we program the setNum function which will decide what to do with num


    2. setState(): THIS IS A FUNCTION TO MANIPULATE THE VARIABLE OR THE STATE


CHECKOUT THE FUNCTIONAL COMPONENT FOR PRACTICAL EXAMPLE 
*/

/*
    PROPS : if we want to pass information from one component to other component or one function to other function or
            one class to another class etc. we use PROPS

            basically like DTO we will be passing data among the components

            data goes from parent node ---> child node , uni directional not bi directional
            Eg: App.js --> ClassComponent.jsx || FunctionalComponent.jsx

            SYNTAX : suppose we want to pass parameter in child functionalComponent syntax will be 
                <FunctionalComponent name="DevTown" age={20}>
                
                NOTE: PROPS CANT HAVE A NORMAL NUMBER YOU HAVE TO WRAP IT IN CURLY BRACES {} , STRINGS ARE ALLOWED NORMALLY 
                      SINCE THEY ARE ALREADY ENCLOSED WITHIN DOUBLE QUOTES ""  
*/

