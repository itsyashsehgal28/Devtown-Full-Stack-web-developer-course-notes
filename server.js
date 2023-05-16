const express = require("express");
// using express

const port = 8081;

const app = express();
// initializing express as app or application

const todolist = ["yash" , "is" , "best"];

app.use(express.json());
// after initializing we need to use our express package
// express.json is our datatype , instead of writing parse and converting to JSON we said our express will work in JSON format

//  http://localhost:8081/todos
app.get("/todos" , (req , res) => {
    res.status(200).send(todolist);
});


/*                                              BEFORE WE USED TO WRITE THIS
    const{method , url} = req ;
            if(url === "/todos")
            {
                if(method === "GET")
                {
                // method GET hua toh response mai yash , is , best likha aayega because of line 8
                    res.writeHead(200 , {"Content-Type" : "text / html"});
                    res.write(todolist.toString());
                }
            }
*/


app.post("/todos" , (req , res) => {
    let newItem = req.body.item;
    todolist.push(newItem);
    res.status(201).send({Message : "Task Added Successfully"});
})

app.delete("/todos" , (req , res) => {
    let deleteItem = req.body.item;
    todolist.find((elem , index) => {
        if (elem === deleteItem){
            todolist.splice(index , 1);
        }    
    });
    res.status(202).send({Message : `Deleted Item ${req.body.item}`});
});

app.all("*" , (req , res) => {
    // all contains all methods GET POST DELETE etc.  
    //  * means for all routes 
    res.status(501).send();
})

app.listen(port , () => {
    console.log(`Server started running on port ${port}`)
});