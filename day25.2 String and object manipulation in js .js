
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
// split on space as a character
console.log(a.split("o"));
// if more than 1 character together it will start giving off spaces jaise yaha 3 h toh usne 2 space di h array mai






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