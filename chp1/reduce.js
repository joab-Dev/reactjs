const nums  = [1, 2, 3,]
const sum = nums.reduce((acc, n) => acc + n, 0)
console.log(sum);

const products = [
    {name: "Laptop", price: 900},
    {name: "Keyboard", price: 60},
    {name: "Mouse", price: 30}
]
const total = products.reduce((sum, p) => sum + p.price, 0)
console.log(total);

const totalPrice = products.map(p => p.price);
console.log(totalPrice);
const price = totalPrice.reduce((sum, p) => sum + p, 0)
console.log(price);

