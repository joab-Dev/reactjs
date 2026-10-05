
const nums = [1,2,3,4,5]
const numTimeThree = nums.map(n => n * 3)
console.log(nums);
console.log(numTimeThree);

const products = [
    {id: 1, name: "Laptop", price: 900, instouck: true},
    {id: 2, name: "Mouse", price: 25, instouck: false},
    {id: 3, name: "Screen", price: 300, instouck: true},
];
const productNames = products.map(p => p.name)
console.log(productNames);
const priceIncVat = products.map(p => ({...p, price: p.price * 2}))
console.log(priceIncVat);

