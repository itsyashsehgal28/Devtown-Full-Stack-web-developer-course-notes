
// STRING OPERATIONS

var data = "My name is YASH";
console.log(data);

console.log("in lower case : " , data.toLowerCase());
console.log("in upper case : ", data.toUpperCase());

// SLICE OPERATION
console.log("Slice operation: ", data.slice(3,8));

// LENGTH OF A STRING
console.log("length of data : " , data.length);

// HOW TO REPLACE A STRING TEMPORARILY

console.log("replace : " , data.replace("YASH" , "YASH SEHGAL") , data.length);
// see if i print length too the length doesnt change because we arent storing it in data.

/*
    My name is YASH
        js:7 in lower case :  my name is yash
        js:8 in upper case :  MY NAME IS YASH
        js:11 Slice operation:  name 
        js:14 length of data :  15
        js:18 replace :  My name is YASH SEHGAL 15
*/


// UPDATE
updated_data= data.replace("YASH" , "YASH SEHGAL");
console.log("before updation : ", data);
console.log("after updation : ",updated_data);


// INCLUDES : CHECKS IF THE STRING IS PRESENT OR NOT (RETURNS TRUE OR FALSE)
console.log(data.includes("yash")); 
// is case sensitive


// PARSEINT - TO CONVERT STRING TO A NUMBER 
var var1= "2345";
console.log(var1);
console.log(parseInt(var1));

// TOSTRING- to convert number to string
var n=1234567;
console.log(n.toString());

console.log(n.toLocaleString());
// adds comma after 3 places everytime


// SPLIT OPERATOR (SLICE IS SLICING SPLIT IS DIVIDING INTO TWO BASED ON A DELIMETER)
var a= "goood morning";
console.log(a.split(" ")); 
// split on basis of space (" ") as a character
console.log(a.split("o"));
// if more than 1 character together it will start giving off spaces jaise yaha 3 h toh usne 2 space di h array mai

/*
        js:33 before updation :  My name is YASH
        js:34 after updation :  My name is YASH SEHGAL
        js:38 false
        js:44 "2345"
        js:45 2345
        js:49 1234567
        js:51 1,234,567
        js:68 Array(2) --- good , morning
        js:70 Array(5) --- g , '' , '' ,  d m , rning
*/


// OBJECT MANIPULATION
var obj = {
    name: "yash sehgal" ,
    course : "mca" ,
    job : "none" , 
    money : "almost none" ,
    age : 22 
};

// to get the whole content 
console.log(obj);

// to get specific content , write for which key you want value for 
console.log(obj.job);

// to get all the keys ------> here OBJECT is the object class and obj is our variable name
console.log(Object.keys(obj));

// to get all the values in those keys
console.log(Object.values(obj));

/*
        .js:85 {name: 'yash sehgal', course: 'mca', job: 'none', money: 'almost none', age: 22}
        .js:88 none
        .js:91 (5) ['name', 'course', 'job', 'money', 'age']
        .js:94 (5) ['yash sehgal', 'mca', 'none', 'almost none', 22]
*/