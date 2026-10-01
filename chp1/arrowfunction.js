// console.log(add(5, 7))
// //function declaration
// //hoisting
// function add(a, b){
//     return a + b;
// }

// console.log(sub(7,5))
// //function expression
// //no hoisting
// const sub = function (a, b){
//     return a - b;
// }

const add = (a, b) => {
    //more line of code
    return a + b;
}
console.log(add(1, 2));
const sub = (a, b) => a - b;
console.log(sub(5, 3));

const double = x => x * 2;
console.log(double(4));

const great = () => console.log("hello");
great();