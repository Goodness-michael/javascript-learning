
// MATH OBJECT
console.log(Math.PI);

// MATH METHODS
// round,ceil,floor,trunc,random,max,min,pow,sqrt

console.log(Math.pow(4,4));
// 4**4
console.log(Math.sqrt(9));

console.log(Math.max(10,2,56,78));

console.log(Math.min(5,6,7,9,23));
console.log(Math.round(9.56));
console.log(Math.ceil(-1.2));
console.log(Math.floor(9.9));
console.log(Math.trunc(-4.6));
console.log(Math.random());

const randomNumber =Math.trunc(Math.random()*6);
console.log(randomNumber);

const customers =["Timi","Eniola","Aiaha", "Olumide","Sesan"];
const numofCustomers =customers.length;
const randomCustomerPosition= Math.floor(Math.random()* numofCustomers);
console.log(customers[randomCustomerPosition]);




