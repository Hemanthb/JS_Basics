// simple callback function
/*let display = result => console.log(result);
 function sum(a,b,func){
    let result = a+b;
    //setTimeout(display(result),2000);
    func(result)
}

sum(2,3,display) */

//asynchronous callback using timeout
/* let display = result => console.log(result);
function sum(a,b,func){
    let result = a+b;
    setTimeout(display,3000);
    setTimeout(function(){func(result)},2000);
    func(result)
}

sum(2,3,display)
 */
let display = result => console.log(result);
function sum(a,b,disp){
    disp(a+b);
}
function sub(a,b,disp){
    disp(a-b);
}
function operations(a,b){
    setTimeout(function(){sum(a,b,display)},2000);
    sub(a,b,display);
}
operations(3,2);
