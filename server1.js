const http = require("http");
// importing http file
const port = 8081;
// assigning a port number , vs wala copy kara h maine 



const todolist = ["yash" , "is" , "best"];
// a normal array of objects


http.createServer((req, res) => 
// req = request , res - response
{
    /*
        res.writeHead(200 , {"Content-Type": "Text/Html"});
        // 200 means okay or success 
        // 404 means not found 
        res.write("<h2>Hey server started u can proceed :)</h2>");
        // whats the response you want to show , write on page this response 
        res.end();
    */
    
    
    /*
        const{method , url} = req ;
        console.log(method , url);
        res.end();

        ye neeche terminal response h 
        1. GET /
        2. GET /favicon.ico
        3. GET /devtown
        4. GET /favicon.ico

        Line 1 ---> GET is method , url is / (home page reloaded so route is none or /)
        Line 2 ---> leave line 2 and 4 
        Line 3 ---> GET is method , url is devtown (route is devtown on localhost://8081)
    */
    
    
        const{method , url} = req ;
        if(url === "/todos")
        {
            if(method === "GET")
            {
                // method GET hua toh response mai yash , is , best likha aayega because of line 8
                res.writeHead(200 , {"Content-Type" : "text / html"});
                res.write(todolist.toString());
            }
            
            else if (method === "POST")
            {
                // POST means sending something from server to body mai likho THUNDER CLIENT PE
                // {"name" : "yash"} aur send kardo
                let body = "";
                // on method for events toh error , data end are events fer uske variables aur ek callback function
                req.on('error' , (err) => {
                    console.log(err);
                    // logging everything 
                }).on('data' , (chunk) => {
                    body += chunk ;
                    console.log(chunk);
                    // kuch data aata h toh body mai store hojayega , data hum THUNDER CLIENT SE BHEJ rhe h 
                    // hexadecimal format for security purposes
                }).on('end' , () =>{
                    body = JSON.parse(body);
                    // Converts a JavaScript Object Notation (JSON) string into an object.
                    console.log("data: " , body);
                    // end se pehle body output kara dete h 
                    let newToDo = todolist;
                    // newToDo variable stores value from todolist
                    newToDo.push(body.item);
                    // item is a KEY uske saath wali value gets appended in todolist
                    console.log(todolist);


                    // THIS IS USED TO SEND / ADD INFORMATION FROM SERVER TO BROWSER

                    /*
                        GET request before --->  yash,is,best
                        POST body ------------>  {"item" : "in the world"}
                        GET request now ------>  yash,is,best,,in the world
                        todolist terminal output ---> [ 'yash', 'is', 'best', 'in the world' ]

                        TO NOTE 
                        SAME SESSION MAI ADD HOTA RAHEGA BUT FERSE RUN KARUNGA DEV TOH STARTING SE START HOGA
                        2 APPENDS IN SAME SESSION ----> yash,is,best,in the world,also in other worlds

                        if i start server again , i am back to start 
                        yash,is,best
                        
                    */
                });

                /*
                                                OUTPUT ON TERMINAL
                                                
                    NPM RUN DEV                     ------>  hey server started on port 8081
                    CHUNK , DATA TRANSFER IN CHUNKS ------>  <Buffer 7b 22 6e 61 6d 65 22 20 3a 20 22 79 61 73 68 22 7d>
                    BODY                            ------>  data:  { name: 'yash' }
                */
            }

            else if (method === "DELETE"){
               
               let body = "";
                req.on('error' , (err) => {
                    // console.log(err); OR  console.error(err); same thing BUT 
                    // in console.log colour is WHITE while in console.error error is highlighted in RED COLOUR IN TERMINAL
                    console.error(err);
                })
                    .on('data' , (chunk) => {
                    body += chunk ;                    
                })
                    .on('end' , () =>
                    {
                        body = JSON.parse(body);
                        let deleteItem = body.item;
                        todolist.find((elem , index) => {
                            if(elem === deleteItem){
                                todolist.splice(index,1);
                            }
                        })
                        /*
                            for(let i=0 ; i<todolist.length; i++)
                            {
                                if(todolist[i] === deleteItem)
                                {
                                    todolist.splice(i,1);
                                    break;


                                /*
                                    SPLICE DELETES ITEMS FROM A STARTING POSITION 

                                    STARTING GET REQUEST -------> yash,is,best
                                    POSTING ANOTHER ITEM -------> {"item" : "in the multiverse"}
                                    GET REQUEST AFTER POST -----> yash,is,best,in the multiverse
                                    DELETE REQUEST AFTER GET ---> {"item" : "is"}
                                    FINAL GET AFTER DELETE -----> yash,best,in the multiverse 

                                    IS is removed because of DELETE and IN THE MULTIVERSE added because of POST
                                *|
                                }
                            }
                        */
                    }
                );                
            }
                        
            else
            {
                res.writeHead(501);
                // code for NOT IMPLEMENTED
            }
        }
        
        else {
            res.writeHead(404);
            // code for ERROR NPT FOUND
        }


        res.end();

        // isse response generate hoga UI pe bhi aur 
        // inspect >> network >> todos >> response >> yash is best 
    
    
    
})
.listen(port , () => 
// listening means the port is now engaged , koi aur use nhi kar payega
{
    console.log(`hey server started on port ${port}`);
    /*
        compulsary for checking if server is working fine or not server busy nhi hoga toh it will listen otherwise not 
        It will write on terminal ki pta chale haan kaam chl rha h 
        netstat - ano CMD PE DALO PTA CHALEGA KONSA PORT FREE H FOR YOUR PC
    */
});


/*  
    http://localhost:8081/
    http://localhost:8081/todos
    ---> TCP - TRANSMISSION CONTROL PROTOCOL - transfers data together
    ---> UDP - USER DATAGRAM PROTOCOL - transfers data in chunks http alag , localhost alag , 5501 alag   
    ---> i changed package.json -----> script mai , waha maine jaise isse start kar rha tha vo likha "node day36node.js"
    ---> so now i only need to write ------> npm start to start the server vo khud he call karlega
    ---> NPM --> NODE PACKAGE MANAGER toh start is a package NOW
*/

/*
    http://localhost:5501/home
    http://localhost:5501/aboutUs
    http://localhost:5501/signIn
    THE HOME , ABOUTUS , SIGNIN ARE CALLED ROUTES , THE WEBSITE WILL FOLLOW BASED ON CERTAIN CLICKS
*/

/*
    HTTP METHODS
    >> GET - get data from the server 
    >> POST - send data to the server  
    >> DELETE - delete some data from the database
    >> PATCH - updation of some fields
    >> PUT - full update / updation of many fields
    
    WE WON'T BE STORING DATA ON THE SERVER , VO KAAM DATABASE KA H 
*/