console.log("app.js loaded.");

// poo = 1 -> python
var poo = 1; // variable with hoisting
// let poo = 1; // exact lexical block scoped variable
// const poo = 1; // constant variable 

console.log(typeof 1); // number
console.log(typeof true); // booleans
console.log(typeof 'string'); // string
console.log(typeof `interpolated string ${poo}`); // string with variables
console.log(typeof (() => {})); // function

let arr = [];
arr.push("fruit");
console.log(arr); 
console.log(Array.isArray(arr)); // check to see if my variable is an array
console.log(typeof arr); // object

function add(){
    return 1 + 1;
}

console.log(add());

var add4 = () => { 
    return 4 + 4 
};
// var add4 = () => 4 + 4 ;

console.log(add4());