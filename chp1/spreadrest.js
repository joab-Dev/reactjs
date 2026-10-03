// a = 10;
// b = a;
// b = 20;
// console.log(a);
// console.log(b);

// const x ={a: 1, b: 2, c:3};
// const y = x;
// y.a = 0;
// console.log(y);
// console.log(x);

// const x ={a: 1, b: 2, c:3};
// const y = {...x};
// y.a = 0;
// console.log(y);
// console.log(x);

// const array1 = [1, 2, 3, 4]
// const array2 = [...array1]
// array2.push(5)
// console.log(array1);
// console.log(array2);

// function sum(...nums){
//     console.log(nums);
    
// }
// sum(1,2,3,4,5)

// const user = {
//     name: "John",
//     age: 30,
//     email: "john@gmail.com"
// }
// const newUser = {name: userName, ...others} = user;
// console.log(newUser);

const user = {
    name: "John",
    age: 30,
    email: "john@gmail.com"
}
const {name, ...others} = user;
console.log(name)
console.log(others);
;
