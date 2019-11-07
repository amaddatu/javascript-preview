console.log("app-day2.js loaded");

// callback function -> object function that describes code to run
var arr = [];
arr.push("apples");
arr.push("oranges");
arr.push("bananas");
console.log(arr);

arr.forEach( (value, index) => {
    console.log(value + " " + index);
});
// arr.forEach( function (value, index){
    // console.log(value + " " + index);
// });

var obj = {};
obj["somekey"] = "somevalue";
obj.anotherkey = 101;
console.log(obj);

// transformation function
let changed_arr = arr.map( (value, index) => {
    return value + " " + index;
});
console.log(changed_arr);

let filtered_arr = arr.filter( (value) => value === "apples");
console.log(
    { 
        arr: arr, 
        filtered_arr: filtered_arr
    } );
