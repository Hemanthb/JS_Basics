//simple closure function
/* function outer(){
    let i = 2;
    function inner(){
        i+=1;//only scope of variable extended and not its value
        return i;
    }
    return inner;
}
let val = outer();
console.log(val());
console.log(val());
console.log(val()); */

/* function foo(outer_arg=2) {
    function inner(inner_arg) {
        return outer_arg + inner_arg;
    }
    return inner;
}
var get_func_inner = foo();
 
console.log(get_func_inner(4));
console.log(get_func_inner(3));
console.dir(get_func_inner); */

/* function outer()
{
    var arr = [];
    let i;
    for (i = 0; i < 4; i++)
    {
        // storing anonymous function
        arr[i] = function() { return i; }
    }
 
    // returning the array.
    return arr;
}
 
var get_arr = outer();
 
console.log(get_arr[0]());
console.log(get_arr[1]());
console.log(get_arr[2]());
console.log(get_arr[3]()); */

// Outer function
/* function outer()
{
    function create_Closure(val)
    {
        return function()
        {
            return val;
        }
    }
    var arr = [];
    var i;
    for (i = 0; i < 4; i++)
    {
        arr[i] = create_Closure(i);
    }
    return arr;
}
var get_arr = outer();
console.dir(get_arr)
console.log(get_arr[0]());
console.log(get_arr[1]());
console.log(get_arr[2]());
console.log(get_arr[3]());
 */

var totalPrice = function(price){
    var initialPrice = price;
    return {
        getTotal:function(){
        console.log("Total price is -"+initialPrice);
    },
    increasePrice:function(price){
        console.log(initialPrice+=price);
        return initialPrice;
        
    },
    decreasePrice:function(price){
        console.log(initialPrice+=price);
        return initialPrice;
    }
}
}
var calc_price = totalPrice(200);
calc_price.increasePrice(50);
calc_price.increasePrice(60);
calc_price.decreasePrice(20);
calc_price.getTotal();
