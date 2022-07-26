/* let a = 3+2;
console.log(a); */

// let c = 3;
// var d = "5";
// let sum = c+d;
// console.log(sum);

// {
//     var name="hem";
//     console.log(name);
// }
// console.log(name);

let name = " Hem"
// function showMessage(msg){
    
//     console.log(msg+name);
// }
// showMessage("Hi");

// function changeName(){
//     let name = "sai";//local scope
//     console.log(name);
// }
// changeName();
// console.log(name);

//function with default args
/* function displayMsg(nam,msg="how are u?"){
    console.log('Hi'+" "+nam+"!"+msg);
}
let nam = 'varsha';
//let msg='wassup?';
displayMsg(nam) */

//Function expression
/* let sayHi = function(){
    return "HI";
};
console.log(sayHi);  //returns the entire function expression
console.log(sayHi()); //returns only the HI 

//copying a function
let func = sayHi;
console.log(func()); */

/* --- ARROW FUNCTIONS --- */

/* let add = (a,b) => a+b;
let square = (n) => n*n;
let hello = () => "Hi hem";
console.log(add(2,3));
console.log(square(4));
console.log(hello());

//Multi-line syntax
let addition = (a,b,c) => {
    let result = a+b+c;
    return result;
}
console.log(addition(3,4,5)); */

let CheckAge = age =>{
    let msg = (age>18)?()=>"Person is adult":()=>"Not an adult";
    return msg();
}
console.log(CheckAge(17));