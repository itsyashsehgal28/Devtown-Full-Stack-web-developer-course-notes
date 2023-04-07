var a = 10;
var b = 2 ;
console.log(a+b);
// but this wont store the sum anywhere 

var sum = a + b ;
console.log("sum is :",sum);
// this will store the sum in sum variable


// SHORTHAND OPERATORS

// var a = a + 5;
a+=5;
console.log("Shorthand operator usage : ",a);
// WE WRITE A = A+B instead we can write A+=B 


// AUTO INCREMENT OPERATOR
// a=a+1;
a++;
console.log("Auto increment operator",a);

// PRE AND POST INCREMENT OPERATOR 

// POST increment and decrement is -- instead of ++
var aa=10;
console.log("Post increment", aa++);
// reflects changes in the next time the variable is used
console.log(aa);


// PRE increment and decrement is -- instead of ++
var bb=10;
console.log("Pre increment operator ",++bb);


// IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT IMPORTANT 

// COMPARISON OPERATORS 
a=5;
b=5;
console.log("normally : ",a==b);
// == operator checks values and replies in boolean 

// DISADVANTAGE OF == OPERATOR
b="5";
console.log("datatype change results in same answer :",a==b);
console.log("with not operator :" , a!=b);
// this will still result in true value instead of one being NUMBER and other being a STRING


// HENCE == ONLY CHECKS THE VALUE NOT THE DATATYPE SO WE HAVE === WHICH ALSO CHECKS THE DATATYPE 
// === NEEDS AN EXACT MATCH OTHERWISE FALSE

console.log("with === checking datatype too :",a===b);
console.log("With not operator !==",a !== b);


// IF AND ELSE STATEMENT
var age=17;
if(age>18)
// checking statement 
{
    console.log("Eligible");
    // if true then this statement 
}
else{
    console.log("Not Eligible")
    // if false then this statement
}


// CONDITIONAL OPERATOR / TERNARY OPERATOR
age=20;

// console.log(age>18?"Eligible with ternary operator":"Eligible with ternary operator");

// we can also write like
age>18
? console.log("Eligible with ternary operator")
: console.log("Eligible with ternary operator");



// FUNCTIONS

var obj = {
    name: "YASH" ,
    surname : function(){
        // this is an unnamed function
        console.log("surname is SEHGAL ");
    }
};

console.log(obj.name);
obj.surname();
// not console since it had a console in it already


// NAMED FUNCTIONS
function sum1(a,b)
{
    console.log(a+b);
}

sum1(2,3);



// ANONYMOUS FUNCTIONS , they dont have a name

var sum = function(a,b){
    console.log(a+b);
}

// assigned a variable cause vo nhi hoga toh call kaise karoge
sum(5,5);



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