//simple promise function
/* let myPromise = new Promise(function(myResolve,myReject)
{
    let age = 2;
    if(age>18){
        myResolve("Eligible");
    }
    else{
        myReject("Uneligible");
    }
});
let display = msg => console.log(msg);
myPromise.then(
    function(value){display(value);},
    function(error){display(error);}
); */

//timeout func used along with a promise 
/* let myPromise = new Promise(function(myResolve,myReject)
{
    setTimeout(function(){myResolve("Hey Hemanth");},2000);
    myReject("Sorry!!");
    
});
myPromise.then(function(value){console.log(value);}); */

//catching an error
/* let myPromise = new Promise(function(myResolve,myReject)
{
    setTimeout(function(){myResolve("Hey Hemanth");},2000);
    myReject("Sorry!!");
    
});
myPromise.catch(function(error){console.log(error);}); */

//let display = () => console.log("Promise Function");
/* let myPromise = new Promise(function(myResolve,myReject)
{
    setTimeout(function(){myResolve("Hey Hemanth");},2000);
    myReject("Sorry!!");
    
});

myPromise.catch(function(error){console.log(error);})
.finally(()=>console.log("Promise Fn"));
 */

const add = (a,b,error) => { return new Promise((resolve,reject) => {
    if(!error){
        resolve(a+b);
    }else{
        reject("Oops!Something wrong!!");
    }
});
}
const sub = (a,b,error) => { return new Promise((resolve,reject) => {
    if(!error){
        resolve(a-b);
    }else{
        reject("Oops!Something wrong!!");
    }
});
}

add(5,8,false)
.then(result=>sub(result,2,true))
.then(result1=>console.log(result1))
.catch(err=>console.log(err))