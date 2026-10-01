 const user = {name: "John", age: 27};
//  const name = user.name
//  const age = user.age 

 //destructuring
 const {name, age } = user;
 console.log(name, age);
 
// const { name: username, age: userAge, country: userCountry="Uk" } = user;
// console.log(username, userAge, userCountry);

const fruits = ["Apple", "Banana", "Carrots"]
const[a, b] = fruits
console.log(a, b);

