// const user = {
//     name: "John",
//     age: 27,
//    address: {
//     city: "uganda"
//  }
// }
// const city = user.address?.city ?? "unknwon city";
// console.log(`You live in $(city).`);

// const email = user.email ?? "unknown"
// console.log(`Your email is ${email}`);

// const count = 0;

// const result = count ?? `unknown` //?? only checks for null or undefined
// console.log(result);

const count = 0; //0 is falsy value
const result = count || 1;

const username = ""
const name = username || `unknown`
console.log(name);

const isActive = false
const active = isActive || true
console.log(active);



