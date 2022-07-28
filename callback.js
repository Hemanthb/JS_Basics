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
/* let display = result => console.log(result);
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
 */

function add(a,b,callback){
    callback(a+b,false);
}
function sub(sum,a,callback){
    callback(sum-a,false);
}
function multiply(diff,a,callback){
    callback(diff*a,false);
}
add(2,4,function(result,error){
    if(!error){
        sub(result,2,function(result1,error){
            if(!error){
                multiply(result1,5,function(result2,error){
                    console.log("Result of arith operations"+result2);
                });
            }
        });
    }
});
