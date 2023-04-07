// ARROW FUNCTIONS

var sum = (a,b) => {
    console.log(a+b);
    // in one liner functions we need not have the {} also we can remove them in one liners
}
sum(5,5);


// ONE LINER EXAMPLE
var sub = (a,b) => console.log(a-b);
sub(10,10);

// BOTH WORK FINE 




// ARRAY FUNCTIONS

// 1. MAP FUNCTIONS (ITS A CALLBACK FUNCTION)

var arr = [1,2,3,4,5];
console.log(arr);


var newarr= arr.map((data) => data*2);
// AGAIN NO {} NEEDED FOR SINGLE LINES 
// ALSO IF YOU HAVE MULTIPLE LINE 
// USE RETURN STATEMENT ELSE IT WONT WORK
console.log(newarr);


// MORE THAN ONE LINE EXAMPLE
newarr = newarr.map((element) => {return element/2});
console.log(newarr);


// with INDEX
newarr= arr.map((data , index) => console.log(index , "=>" , data*2));


// 2. FILTER FUNCTIONS (FILTERS VALUES BASED ON THE FUNCTION)
var newarr2 = arr.filter((data) => data <= 3);
console.log(newarr2);

newarr2 = arr.filter((element) => element >= 3);
console.log("filtered : ",newarr2);


// 3. FIND (RETURNS the FIRST element that matches the conditions otherwise undefined )

arr=[2,3,4,5]
newarr2 = arr.find((data) => data >=6);
console.log(newarr2);
// this will be undefined since no data is greater than 6

newarr2 = arr.find((data) => data < 5);
console.log(newarr2);
// this will be 2 because 2 is <5 so first true occurence gets printed



// 4. REDUCE (RETURNS A VALUE INSTEAD OF AN ARRAY)
var val= arr.reduce((accumulation , currentValue) => {
    return accumulation+currentValue 
},0);
// for less confusions we write this 
// the 0 at the end signifies ASSIGNING the variable VALUE = 0 to remove junk values , not needed though
// accumulation = data , currentValue = index
// 
console.log(val);


// IMPORTANT EXAMPLE TO UNDERSTAND REDUCE
var flipkart = [
    {
        Sno : 1 ,
        price : 1200 , 
        quantity : 2
    },

    {
        Sno : 2 ,
        price : 200 , 
        quantity : 3
    },

    {
        Sno : 3 ,
        price : 100 , 
        quantity : 12
    },

    {
        Sno : 4 ,
        price : 120 , 
        quantity : 32
    },

    {
        Sno : 5 ,
        price : 10 , 
        quantity : 22
    }
]

var sum = flipkart.reduce((accumulation , currentValue) => {
    return accumulation + currentValue.price * currentValue.quantity
} ,0);
// also if i dont put this 0 it gives out a junk value 
// since i have used sum before 

console.log(sum);



// PROMISES 
// ITS A VALUE THAT WE HOPE TO GET IN THE FUTURE BUT NOT IMMEDIATELY
// EX: YOUTUBE VIDEOS , THERE CAN BE 3 CONDITIONS SAME WITH PROMISES 
// 1. PENDING STATE (NEED TO WATCH)
// 2. FULFILL STATE (PLAYING)
// 3. REJECT STATE (NOT PLAYING)


// SYNTAX : var promise = new promise(() => {}) can be an arrow function like this or 
//          var promise = new promise(() => function() {} ) normal function or anonymous function

var Mypromise = new Promise((resolve , reject ) => {
    resolve("SUCCESS");

    reject("FAILED");
});

Mypromise
.then((data) => console.log(data))
// THEN means it is working or is true so it calls RESOLVE which will print data = "SUCCESS"
.catch((err)=> console.log(err));
// CATCH means its not working and it will call reject which will print data = "FAILED"




// TIMEOUT FUNCTION GIVES TIME TO THE SERVER TO WAIT THEN REPLY BACK , TIME IS IN MILISECONDS ....1000MS = 1SEC
var Mypromise2 = new Promise((resolve , reject ) => {
    setTimeout(function(){
        resolve("pass");
    } , 5000);
    
    setTimeout(function(){
        reject("fail");
    } , 3000);
    // IN THIS CASE FAILED WILL BE PRINTED SINCE ITS TIME IS LESS TO EXECUTE
    
});

Mypromise2
.then((data) => console.log(data))
.catch((err)=> console.log(err));





var Mypromise3 = new Promise((resolve , reject ) => {
    resolve("last pass");

    reject("last fail");
});

Mypromise3
.then((data)=> "Hey" + data)
.then((data) => console.log(data))
.catch((err)=> console.log(err));

console.log("i am last");



// OUTPUT
// i am last    ------>THIS WAS THE LAST CONSOLE STATEMENT , HENCE CALLBACK FUNCTIONS TAKE TIME
// SUCCESS      ------>THIS WAS THE 1ST PROMISE , NOW SEQUENTIAL WORKING
// Heylast pass ------>THIS WAS THE 3RD PROMISE , 2ND WAS NOT EXECUTED BECAUSE IT HAD A SET TIMEOUT
// fail         ------>THIS WAS THE 2ND PROMISE , EXECUTED AT LAST