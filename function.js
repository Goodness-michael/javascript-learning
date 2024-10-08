// functions
// function declaration

function greeting(){
    console.log("welcome to our App");
}
// invoked/called
greeting();
greeting();
function speak(){
    console.log("hello class")
}
speak();
// functions can take parameters
function specialGreeting(name ="user"){
    console.log(`${name},welcome to our app`)
}
specialGreeting("Timi");
specialGreeting("Goodness");

// write a function that logs the addition of three numbers
function addTwoNumbers(num1,num2,num3){
    const result =num1 + num2+ num3;
    console.log(result)
}
addTwoNumbers(9,5,7);
addTwoNumbers(-10,7,3);
// check if number is positive or negative
function checkNum(num) { 
if (num>0){console.log(`${num} is positive`);
}else if (num<0) {console.log(`${num} is negative`);
}else{
    console.log("this is zero");
}
}
checkNum(89); 
checkNum(-54);
checkNum(0);
// function expression
 myFunction1();
function myFunction1(){

    console.log(" this is a function declaration");
}
const myFunction2 = function(){
    console.log("this is a function expression")
} 
myFunction2();

//  write a function that calculates the product of two nums
const productofTwoNums =function (num1 ,num2) {
    return num1*num2;
};
const result= productofTwoNums(9,2);
console.log(`the result is ${result}`);

// write a function that converts km to meter
// 7km =7* 1000

const kmToMeters = function(value){
    const meter =value *1000;
    return`${value} km is equal to ${meter}m`;
    // inaccessible code i any const after return in a block of code
}
console.log(kmToMeters(6));
console.log(kmToMeters(4.5));
//  CLASS WORK===========
// WRITE A  FUNCTION THAT CALCULATES THE AVERAGE OF THREE NUMBERS AND RETURNS THE AVERAGE
const averageCalc = function(value1, value2, value3){
    const average =(value1 + value2+value3)/3;
    return average;
};
console.log(averageCalc(9,7,6));
// write a function that calculates the age of user,your function should take in year of birth as parameter
const usersage= function( yearofBirth){
    return 2024 - yearofBirth;
};
console.log(usersage(1960));
// write a function that checks if a number is even or odd
const oddorEven = function(num){
    if(num%2===0){
        return "this is an even number";
    }else {
        return "this is an odd number";
    }
}
console.log(oddorEven(45))

// ===========example
let savings = 8900;

const checkWithdrawal = function(amount){
    if(amount< savings){
    savings-=amount;
    return `withdrawal of ${amount}is successful and my balance is ${savings}`
    }else{
        return `insufficient funds`;
    }
};
console.log(checkWithdrawal(6500));
console.log(checkWithdrawal(2000));
// console.log(`my current saving is ${savings}`);

// write a code for depositing money
const depositAmount = function(amount){
    savings += amount;
    return `deposit of ${amount} is successful and your current balance is ${savings}`
};
console.log(depositAmount(900));
console.log(checkWithdrawal(1200));
console.log(depositAmount(5000));

// build a SIMPLE ATM  machine

let userPin = 1234;
// let savings = 40000;

// write a function that checks the entered pin
const checkPin = function (enteredPin) {
  if (enteredPin === userPin) {
    return true;
  } else {
    return false;
  }
};

const withdraw = function (amount) {
  if (checkPin(1234)) {
    //withdraw
    if (savings > amount) {
      //perform
      savings -= amount;
      console.log(
        `withdrawal of ${amount} is successful and balance is ${savings}`
      );
    } else {
      console.log("insufficient funds");
    }
  } else {
    console.log("Incorrect pin, try again");
  }
};

withdraw(2000);
withdraw(5000);

// write a functions that checks number of attempts on the pin,
// max attempt is 3, card should be blocked
let attempt = 0;
let blocked = false;

const checkCardAttempt = function () {
  if (blocked) {
    console.log("Your Card is Blocked");
    return;
  }
  if (checkPin(6676)) {
    console.log("perform Transaction");
    attempt = 0;
  } else {
    attempt++;
    if (attempt === 3) {
      console.log("Your Card is Blocked");
      blocked = true;
    } else {
      console.log(`Incorrect Pin, ${3 - attempt} attempts left`);
    }
  }
};
checkCardAttempt();
checkCardAttempt();

// write a function that checks if an email is valid or not











