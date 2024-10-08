
// ARRAYS=======COMPLEX DATA TYPE
// [element1,element2,]
const mixedArr =[ 9, "str", true,65, [90,false]];
const students =["GOODNESS","Ashia","Adura"];
console.log(students);

// array property (length)
console.log(students.length);

// getting element position
console.log(students[1]);
// change element in array

students[0]= "John Doe";
console.log(students);
// array methods
// adding and removing elements from an array push,pop, shift and unshift
// last in forced out(lifo)

students.push("thersa");
students.push("eniola");
students.pop();
students.pop();
console.log(students.pop());
students.unshift("Adedayo");
students.unshift("Timi");
students.shift()
console.log(students);

// convert arrays to astring ( toString,join)
console.log(students.toString());
console.log(students.join("-"));
// 

const onlineStudents =["john", "peter", "paul"];
const weekdayStudents =["Ade", "Sussan",,"Goodness","Ada"];
const allStudents =onlineStudents.concat(weekdayStudents, ["Ruth","Gift"]);
console.log(allStudents);

// includes property
console.log(onlineStudents.includes("paul"));

// sort,reverse
const carBrands =["toyota","lexus","bmw","Audi","chevolet"];
console.log(carBrands);
console.log(carBrands.sort());
console.log(carBrands.reverse());

// extract portions of an array slice(start,end(not included))
const friends =["ola","timi","john"];
console.log(friends.slice(0,2));
console.log(friends.slice(1));

//  split

let text= "Hello worl is fun";
console.log(text.split(""));
const text2 ="tadapal";
console.log(text2.split("a"));
console.log(text2.split(""));

// hello olleh
const reverseStr = (str)=>str.split("").reverse().join("");
console.log(reverseStr("hello"));

// higher order array methods (callback functions iterators methods)
const fruits =["oranges", "mangeos", "pear","grapes"];

for (const fruit of fruits){console.log(`${fruit} is something i like`);
if(fruit==="pear"){ console.log(`${fruit} is my best fruit`);}
}

// find, filter, reduce , forEach, map, reduce every some
// forEach executes a function for each element in an array

const customers = ["peter","pan","jan","Dwayne","Dizzy"];
customers.forEach((customer,index)=>{ console.log(customer,index)});

// creates a new array with transformed element
const nums =[4,5,6,7];
const transformedNums =nums.map((num) => {
    return num * 2
} );
console.log(transformedNums);

// find--returns the first matching element in an array
const mySpecialNum =nums.find((num)=> { return num>=5;});

console.log(mySpecialNum);
// fillter- returns all element that fits a search condition in an array

// const allMyspecialNums = nums.filler((num) =>num >=5);
// console.log(allMyspecialNums);

// let use map

 let myBalance =8000;
 const transactions =[4000,-125,10000,-5000,-2000,1500];

 transactions.map((transaction) => 
{if (transaction>0) console.log(`you have been credited with  ${transaction } naira` );}
)

//  map array and find


// array methods every and some
// every checks if all element satisfy a condition

const ages =[20,42,61,81]
const allAdult = ages.every( (age) =>age >= 18);
console.log(allAdult);

// some checks if atleast one satisfy the condition

const someChildren = ages.some((age) => age <18);
console.log(someChildren);

// array method: reduce method
// REDUCE:ACCUMULATING NUMBERS

const cartPrices = [25000,32000,15000,4000]
const cartTotal =cartPrices.reduce((prev,curr) => {return prev+curr;},300);
console.log(cartTotal)

// ARRAY METHOD SORT
const peoplesName = ["Zigi", "Samson", "Niyi", "Ademola"];
const atoZ =peoplesName.sort();
console.log(atoZ);

const ztoA =peoplesName.sort((a,b) => b-a);
console.log(ztoA);

const prices =[ 8000,67000,767,5600];
const highesttoLowest = prices.sort((a,b) => b-a);
console.log(highesttoLowest);    


// Array.isArray- checks if a varriable is array or not
console.log(Array.isArray(45));
// Array.from - changes a datatype to an array
console.log(Array.from("123"));


// indexOf,lastIndexOf
const arr =["ade","john","jane","ade"];
// find index gets the positon of the element that matches a search condition
const arr2 =[5,6,7,8,120,500,56];
const theIndexIs =arr2.findIndex((num) => num>100);
console.log(theIndexIs);












