// NEED FOR ASYNC AND AWAIT

// Our compiler works asynchronously but sometimes we need to wait instead of not waiting and executing other statements 
// ASYNC AND AWAIT HELPS THE COMPILER TO KNOW HOW TO ACT 


var mypromise = new Promise(function (resolve , reject){
    setTimeout(function(){
        resolve("Success");
    },5000);

    

});
// this was a normal promise but we won't write then and catch

var getOurPromise = async() => {
    var getOurPromiseResult = await mypromise;
    console.log(getOurPromiseResult);
}

getOurPromise();







var mypromise2 = new Promise(function (resolve , reject){
    setTimeout(function(){
        resolve("Success2");
    },3000);

    setTimeout(function(){
        reject("last fail");
    } , 5000);
    
    // reject("last fail");
});

var getOurPromise = async() => {
    try{
        let getOurPromiseResult = await mypromise2;
        console.log(getOurPromiseResult);
    } 

    catch(error){
        console.log("error2");
    }
}

getOurPromise();


// in 1 promise answer is given to whichever is executed first 