// const texRate = 0.07; // 7% tax rate
// texRate = 0.08; //Attempting to ressingn a constant variable
let salary = 50000; //initial salary
salary = 55000; //Reassigning the salary variable
const user = {
    name: "john doe",
    age: 30,
    occupation: "software developer"
};
user.name = "jane smith"; //modifying a property of the constant object
user.age = 28; //modifying another property of the constant object
user.occupation = "data scientist"; //modifying another property of the constant

x = 10;
y = 10;
 function test() {
    var x = 20;
    let y = 20;
    console.log("inside function - x:", x); //output: 20
    console.log("inside function - y:", y) //output: 20
}
console.log("before function - x:", x); //output: 10
console.log("before function - y:", y); //output: 10
test();
console.log("after function - x:", x); //output: 10
console.log("after function - x:", x); //output: 10