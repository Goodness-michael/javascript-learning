// JAVASCRIPT DATA TYPES
// THERE TWO TYPES OF DATA TYPES
// 1. Primitive Data types: this can only hold one value at a time. eg Strings(text characters("")),Number,Boolean(true /false),null,undefined
// Complext data type:This can hold more than one value

// STRINGS
// This is denoted by single quote or double quote
const firstName ="john";
const lastName = "Doe";

console.log(firstName);
console.log(lastName);

// string properties:length
// string.length
console.log(firstName.length);
console.log(lastName.length);

// String Concatenation(joining)
const fullName = firstName+ " " + lastName;
console.log(fullName);
console.log(fullName.length);

// STRING METHODS
// toLowerCase, toUppercase
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
// replace,replaceAll
console.log(fullName.replace("o", "*",));
console.log( fullName.replaceAll("o","*"));

// included
console.log(fullName.includes("y"));
console.log(fullName.startsWith("jo"));
const myEmail ="johndoe@google.com";

console.log(myEmail);
console.log(myEmail.length);
console.log(myEmail.endsWith("google.com"));

// indexOF , lastIndexof
console.log(myEmail.indexOf("j"));
console.log(myEmail.lastIndexOf("o"));

console.log(myEmail.charAt(5));
// concat
console.log(myEmail.concat("example"));
// triming
const userName = "     user001   ";
console.log(userName.length);
console.log(userName.trim());
// trimStart, trimEnd
console.log(userName.trimStart());
console.log(userName.trimEnd());

// extract portions of a string using slice method,sub-string method,and substr.
// example.
const surname ="Sandler";
console.log(surname.slice(0,4));
console.log(surname.substring(1,6));

// string concatination
const bookTittle= "Americannah";
const author =" Ngozi adichie";
const yearpublished = "2016";


// template literals - it allows us to format varriables into  it can be done using back ticks``


const description2 =`the book ${bookTittle} written by ${author} was published in the year ${yearpublished}.`

console.log(description2);

const name1 = "Ade";
const name2 ="Wale";
// Ade is a boy
const sentence = `${name1} is a boy`;
// his name is wale
const sentence2 =`his name is ${name2}`;
// tinubu said and i quote "let the poor breathe"

const quote = `Tinubu said and i quote "Let the poor breathe`;
console.log(quote);






