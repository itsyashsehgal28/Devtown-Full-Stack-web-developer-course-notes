const http = require("http");
// importing http file
const port = 8081;
// assigning a port number , vs wala copy kara h maine 



const todolist = ["yash" , "is" , "best"];


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
        // GET /
        // GET /favicon.ico
        // GET /devtown
        // GET /favicon.ico
    */
    
    /*
        const{method , url} = req ;
        if(url === "/todos"){
            if(method === "GET"){
                res.writeHead(200);
                res.write(todolist.toString());
            }
        }
        res.end();

        isse response generate hoga UI pe bhi aur 
        inspect >> network >> todos >> response >> yash is best 
    */
    
    
})
.listen(port , () => 
// listening means the port is now engaged , koi aur use nhi kar payega
{
    console.log(`hey server started on port ${port}`);
    /*
        compulsary for checking if server is working fine or not server busy nhi hoga toh it will listen otherwise not 
        It will write on terminal ki pta chale haan kaam chl rha h 
        netstat - ano CMD PE DALO PTA CHALEGA KONSA PORT FREE H 
    */
});


/*  
    http://localhost:8081/
    ---> TCP - TRANSMISSION CONTROL PROTOCOL - transfers data together
    ---> UDP - USER DATAGRAM PROTOCOL - transfers data in chunks http alag , localhost alag , 5501 alag   
    ---> i changed package.json -----> script mai , waha maine jaise isse start kar rha tha vo likha "node day36node.js"
    ---> so now i only need to write ------> npm start to start the server vo khud he call karlega
    ---> NPM --> NODE PACKAGE MANAGER toh start is a package 
*/

/*
    http://localhost:5501/home
    http://localhost:5501/aboutUs
    http://localhost:5501/signIn
    THE HOME , ABOUTUS , SIGNIN ARE CALLED ROUTERS OR ROUTES THE WEBSITE WILL FOLLOW BASED ON CERTAIN CLICKS
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