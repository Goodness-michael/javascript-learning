// determine weather varriables should be const or let
// create a varriable named my country set it to whatever value
// create a varriable called my age set it to your own value
// create a varriable called fullName anad set it to any value
// log the length of yourcountry as well as the length
// of fullname to the console
// convert the fullname to all uppercase
// extract just the first name in your fullname and log to console
// write a short description of the person in this format
// eg peter pan is acitizen of portugal
// increase the age declared above by 1
// log the remainder of when 100 is divided by 7 to the console
// check wheather the country variable starts with h

// SOLUTION================================================
const myCountry ="Nigeria";
let myAge = "65";
let fullName = "Goodness  michael";
console .log(myCountry);
console.log(myAge);
console.log(fullName);

console.log(myCountry.length);
console.log(fullName.length)

console.log(fullName.toUpperCase());
console.log(fullName.slice(10,17));

let description =`${fullName} is from ${myCountry}. She loves to eat good food and she is ${myAge}.`
console.log(description);

myAge += 1
console.log(myAge);

let x=100
let y =7
let 