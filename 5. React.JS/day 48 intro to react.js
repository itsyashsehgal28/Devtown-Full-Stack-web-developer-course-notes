/*
    React Js can have 2 extensions :    .js(javascript)  &&  .ts(typescript)

    also instead of js we can use .jsx extension (Javascript XML file)  ---> combo of Javascript + Html file

    since we have done a lot of projects in js we will be using and learning TYPESCRIPT now for React       

    TYPESCRIPT : not much different than js , its ES6 (ecma script or ejs or ECMA JS) script which is built on JS6 version of Javascript
*/

/* 
    SPA - Single Page Application ---> on click of any link or button the page url should not change 

        ON RUNNING A PARTICULAR COMMAND WE WILL GET THIS TEMPLATE IN A FILE NAMED "INDEX.JS"
            <html>
                <head>
                </head>
                <body>
                    <div id = "root"> </div>
                </body>
            </html>

            this comes in by default and we write in our jsx file and take the id root but dont work in this file we work in jsx


    Since everything is present in 1 page or 1 file it should take a lot of time to load but react or angular or vue js
    dont let us waste this time by dividing the page into components , different components , it will only provide 
    that component which is needed at that time or rendering only those things that are needed 

    Eg: Gmail , Instagram
*/


/*
    THINGS WE HAVE IN REACT :

    --->    Components   : Group Codes together to form components
                           think of this like your folders or different files like a component for aboutus , contactus etc.
                           
                           There are 2 ways for declaring components : 
                           >> Class Components : Older Version
                           >> Function Components : Newest Version
                           
                           (Syntax differs a bit in both nothing else )


    --->    Data Binding : Binding Data With respect to your component 
                           Uni-Directional Flow of Data

                           Uni-Directional means the flow of data is from parent element to child element not vice-versa
                           Eg: home.jsx ---> navbar.jsx ----> aboutus.jsx 
                           We Cannot Go the other way hence uni directional flow of data
                           Reverse or Backtracking is not possible

    --->    Virtual DOM  : In DOM operations in JS if we change an element whole page gets refreshed but in virtual DOM
                           only the element gets refreshed , no need to load the whole page 

                           Eg: updated <p> in <body> ----> Virtual DOM ----> DOM ----> Html manipulations reflected on page

    --->    Redux :        State Management , how to manage your storage or memory in your local browser 
                           it will manage local storage


    --->    Hooks :        LifeCycle Methods 
                           like in components we have stages :
                           >> when it was created
                           >> when it was updated 
                           >> when it got ended or terminated 
*/


/* 
    HOW TO CREATE A REACT PROJECT : 
        npx create-react-app project_name
        where npx ---> node package executions
    
        how i installed this after npm error ENOENT ----> 
            npm install create-react-app 
            npx create-react-app yash_react 
            then cd yash_react 

        npm start
        Starts the development server.

        npm run build
        Bundles the app into static files for production.

        npm test
        Starts the test runner.

        npm run eject
        Removes this tool and copies build dependencies, configuration files
        and scripts into the app directory. If you do this, you can’t go back!

        We suggest that you begin by typing:

        cd yash_react
        npm start

        Happy hacking!
*/