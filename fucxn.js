// arrow function

const myFunction = (p1, p2) => {};

// write an arrow function to check if password is long enough
// (min password length 7)

const passwordCheck = (value) => {
  if (value.length >= 7) {
    console.log("Password is long enough");
  } else {
    console.log("Short password");
  }
};

passwordCheck("password");

// const calcAverage =(num1,num2) => {
//   return(num1 + num2)/2;
// }

const calcAverage = (num1, num2) => (num1 + num2) / 2;
console.log(calcAverage(8, 5));

const passwordCheck2 = (value) =>
  value.length >= 7 ? "password is long enough" : "short password";

// write function to change km to meters
const kmToMetersAgain = (value) => `${value}km  is equal to ${value * 1000}`;
console.log(kmToMetersAgain(8.5));

//  scooping in javascript== Gobal local
// global varriable are varriables calledd outside a block of code while local varribles are varriables called within
// a block of code.
const mySavings = 9000;
const seeBalance = () => {
  const mySavings = 10000;
  console.log(mySavings);
};
seeBalance();

// write a function that takes in a string as a parameter and returns the string in all capital letters

const capitalizeStr = (str) => str.toUpperCase();
console.log(capitalizeStr("imo state"));

// write a javascript function that accepts a string as a string as aparameter and converts the first letter of the word to uppercase.
//
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase();
console.log(capitalizeFirstLetter("teacher"));

// write a javascript function that accepts an argument and returns the datatype.
const checkDataType = (arg) => typeof arg;
console.log(checkDataType(90));

// write a function that returns whether a number is even or odd

// write a function named minutesToHours that receives a number of minutes as parameter
// and returns a number representing the same amount of time but in hours.
const minutesToHours = (minute) => minute / 60;

// write a function called longestString that recieves two string as parameters
// and return the longest of the two strings.
//
// write a function named concat3 that receives 3 string as parameters
// (string1,string2,string3) and an additional string named separator.
// the function should concatenate the three strings
// using the provided separator and return the result.

const longestString = (str1, str2) => (str1.length > str2.length ? str1 : str2);
console.log(longestString("goodness", "faith"));

const concat3 = (str1, str2, str3, seperator) =>
  str1 + seperator + str2 + seperator + str3;
console.log(concat3("ade", "wale", "ola", "#"));

// write a function that returns the square of a number
const squareOfNumber = (num) => num ** 2;
console.log(squareOfNumber(12));

// write a function called checkLoanEligibility,which recieves an amount as a parameter and returns
// whether a user is eligible or not based on the criterion the loan
//  amount cannot be more than twice the amount  of savings
let savings = 60000;

const checkLoanEligibility = (amount) =>
  amount > savings * 2 ? "ineligible" : "eligible";
// write a function that logs hello world to the console

function greeting (){
  console.log("hello world")
 }
// or
const logger = () =>console.log("hello world");
logger()

// write a function that returns 34
const myFunction4 = num4 =>34;

// write a function that returns the number  of vowels in a string
// const numberOfVowels = vowels(a,e,i,o,u);vowel => console.log(numberOfVowels.includes(a,e,i,o,u).length) 


const countNumOfVowels= (str) =>{
  let vowels ="aeiou"
  let numberOfVowels= 0;
const lowerCaseStr =str.toLowerCase();
// loop over the lowerCaseStr

}